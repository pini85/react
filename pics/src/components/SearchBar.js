import React from 'react';
//UNCONTROLLED//

// class SearchBar extends React.Component {
//     onInputChange(event) {
//         console.log(event.target.value);
//     }
//     render() {
//         return (
//         <div className="ui segment" style={{ marginTop: '10px'}}>
//             <form className="ui form" action="">
//                 <div className="field">
//                     <label htmlFor="">Image Search</label>
//                     {/* /* <input type="text" onChange= {(event) => console.log(event.target.value)} /> */ */}
//                     <input type="text" onChange={this.onInputChange}/>
//                 </div> 
//             </form>
//         </div>
//         );
//     }
// }

//CONTROLLED//

class SearchBar extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {term: ''}
    //     this.onFormSubmit = this.onFormSubmit.bind(this)
    // }
    /* 
    One way to solve the problem of this undefined is to "simply" bind the onFormSubmit function ( creating a new function) and setting the this variable to it. And we are overriding the this.onFormSubmit function with it. So anytime we call onFormSubmit the this will be attached to it.
    */
    state = { term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.runMeWhenUserSubmits(this.state.term)
/*
One way to solve the this undefined problem is to set the function as an array function.
"Arrow functions are bound to their parent's context." Nope, inaccurate. Arrow functions do not have a `this`, which means any usage of `this` inside an arrow function is just like any other variable, and is looked up lexically through parent scopes until a `this` is found.
 */
    }

    // onFormSubmit (event)  {
       
    //     event.preventDefault();
    //     console.log(this.state.term)
    //     /*
    //     'this' is undefined. Because we invoke the onFormSubmit function and exctracted, seperated from the SearchBar instance. this was defined in the SeardchBar instance. Now onFormSubmit is extracted from tht instance.
    //      */
    // }
    
    render() {
        return (   
            
        <div className="ui segment" style={{ marginTop: '10px'}}>
            {/* <form onSubmit ={event => this.onFormSubmit(event)}></form> */}
            {/* 
            Another way to solve the this problem is placing an arrow function here. Which will be a callback function So the the arrow function will look for the this. 
            */}

            
            <form onSubmit ={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="">Image Search</label>
                    <input 
                    type="text"
                    value={this.state.term} 
                    onChange={e => 
                    this.setState({ term: e.target.value.toUpperCase() })
                    }
                    />
                </div> 
            </form>
        </div>
        );
    }
    
}

/*
Flow:

1) User types in input
2) Callback gets invoked
3) We call setState with the new value
4) Component rerenders
5) Input is told what its value is( coming from state )

This is a controlled way because are getting the current value from state. Not reaching to the dom and getting the value from the html element of Input. In html we get the value once the callbakc function executes. Here we get the value from the state itself. The inpout element gets the value not from HTML but from state.

React only knew what the input value is only when our callback function was invoked in other words only when a user typed in something. But now we can get the value even when the user didnt type in anything.
 */

export default SearchBar;

//OnClick, onChange, onSubmit