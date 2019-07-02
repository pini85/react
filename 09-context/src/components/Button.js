import React from 'react';
import LangaugeContext from '../contexts/LangaugeContext';


class Button extends React.Component {
    static contextType = LangaugeContext;
    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen'
    }
    render() {
        return (
            
            <button className="ui button primary">
                <LangaugeContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LangaugeContext.Consumer>  
            </button>
        )

    }
}

export default Button;

/////Consumer///////
/*
We need to wrap the Consumer method with the DIRECT CHILD we want the context value to be assigned.
We give a callback value. Which is a fixed value coming from Context. And the Consumer method will call this function with the argument value whenever it gets rendered.

 */







//////// this.Context ///////////

/*
// class Button extends React.Component {
//     static contextType = LangaugeContext;
//     render() {
//         const text = this.context === 'english' ? 'Submit' : 'Vaarrrr'
//         return <button className="ui button primary">{text}</button>
//     }
// }

To get information out of a default value we first need to create a contextType method on the class.

Static means is not to be called in the instance of this class rather on the classitself.
So Button.contextType = LangauageContext is the same syntax.

We are connecting our context object with our Button Component by contextType

Now we can get the information out of the context Object by calling this.context
 */