Summary:


<ParentComponent>
<ChildComponent
props = "I am a prop" />
<Parent Component>

ParentComponent = (props) => {
    props.children <--- props: "I am a prop"
}

Spinner.defaultProps = {
    message: 'Loading...'
}


AXIOS
const term = 'apple'
1st way
axios.get(1st argument 'URL', 2nd argument customization { 
    params: {query: term},
    headers: {
        Authorization: 'Client-ID ACCESS KEY'
    }

})


2nd way

axios.get'(URL/?client_id=YOUR_ACCESS_KEY?query={term}',{

});


JSX
JSX is essentially javascript. Babel converts JSX to javascript so the browser understands it.

You must write after the return keyword the div or else it will return undefined

const App = () => {
        return <div>Hi there!</div>;
};


JSX is like HTML but with 3 differences

1)
If you have multi line JSX code then the convention is that you indent the div and in the return put (

const App = () => {

    return (
        <div>
            <label className="label" for="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}></button>
        </div>
    );
};

Inline styles with JSX

button style={{backgroundColor:'red'}}

First {} indicates we want to reference a js variable inside our JSX.
Second {} means we want to indicate a js object.

class should be written className

Rules of Class Components
1) Must be a javascript Class
2) Must extend(subclass) React.Component
3) Must define a 'render' method that returns some amount of JSX.

Rules of State

1) Only usable with class components
2) You will confuse props with state
3)'State' is a JS object that contains data relevant to a component.
4)Updating 'State' on a component causes the component to instantly render
5) STATE MUST BE INITIALIZED WHEN A COMPONENT IS CREATED
6)State can only be updated using the function 'SetState'

Life Cycle of this App

1) JS file loaded by browser

2) Instance of App component was created

3) App components 'constructor' function gets called which calls super

4) State object is created and assigned to the 'this.state' property

5) We call geolocation service. It has a callback function. This will be called in the future.

6) React calls the components render Method.

7)Render method returns JSX and gets rendered to the page as HTML

--------------- wait some time----------------------

8) We get the results of geolocation.

9) We update our state object with a call to this.setState.
(We execute the callback function. We take the position object and we pull our latitude out of it and we call set 
state to update our states on our component).

9) React sees that we updated the state of a component

10) React calls our 'render' method a second time

11) Render method returns some (updated) JSX

12) React takes that JSX and updates content on the screen


Component Lifecycle

A component lifecycle method is a function that we can optionally define inside of our class based components if we decide to implement these methods.
They will be called automatically by react at certain points during a component's life cycle.

1) Constructor 

2) render 

-- content visbile on screen --


3) componentDidMount (Good place to do data loading)
componentDidMount is automatically called by react once the component is displayed on the screen. So we can manually implement some logic inside the function to do things.

-- Sit and wait for updates(setState)


4)componentDidUpdate
When the update happens we can call manually again put logic to componentDidUpdate

-- render() is called. Remember it automatically gets called once a component gets updated.
-- Sit and wait until this component is not longer shown

5) componentWillUnmount


Why and when should we use the LifeCycle methods?

Constructor
Good place to do one time setup. Like set this.state

render
Avoid doing anything besides returning JSX

componentDidMount
Good place to do data loading. Like an API request.

componentDidUpdate
Good place to do more data loading when state/prop change. User clicked on the button and we need to do another API request.

componentWillUnMount
Good place to do cleanup(especially for non-React stuff)

We can put technically the geolocation Api request in the constructor because we are setting it up only one time. But it is best practice to do all data loading in the componentDidMount




CONTROLLED AND UNCONTROLLED

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
    state = { term: ''};
    
    render() {
        return (   
            
        <div className="ui segment" style={{ marginTop: '10px'}}>
            <form className="ui form" action="">
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





Solving the this undefined problem: (context problems)




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
        console.log(this.state.term)
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

Key prop:
To render only the necessary items in a list. So it wont rerender the whole list when you update the view.
put the key prop in the root elemenent.