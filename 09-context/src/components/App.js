import React from 'react';
import UserCreate from './UserCreate';
import LangaugeContext from '../contexts/LangaugeContext';

class App extends React.Component {
    state = { langauge: 'english'};
    onLangaugeChange = (langauge) => {
        this.setState({langauge})

    }
    render() {
        return(
            <div className="ui container">
                <div>
                    Select a langauge:
                    <i onClick={()=> this.onLangaugeChange('english')} className="flag us"/>
                    <i  onClick={()=> this.onLangaugeChange('dutch')} className="flag nl"/>
                </div>
                <LangaugeContext.Provider value={this.state.langauge}>
                <UserCreate/>
                </LangaugeContext.Provider>
                <LangaugeContext.Provider value= "english">
                <UserCreate/>
                </LangaugeContext.Provider>
            </div>

        ) 
    }
}
export default App;

/*
Context:
Context solves the problem that before if we want to communicate a prop to a child we need to send that prop to the child component, then that child component can send that to its child component. There was no way to get a prop to a nested child component.
With context you can take that prop from the parent component and give it to ANY child component.

Here, we want to give the prop data of what language is selected. It comes from the parent component{App} we want to pass this information to our Field and button component. 
The UserCreate doesn't need to know this information. So we use context to sned the information to the nested components.

There are two ways to insert information to a Context object. And there is 2 ways to get information out.

Insert information:
default value
Provider

Get information out:
this.context
Consumer

With default value please look at the button component
With consumer please liik at the Field component

Provider:
with the Context object we get the Provider and Consumer methods.
What ever component we want the context information to give, we need to wrap them with the Provider method. There is a value prop called value which we can assign the value we want the context to get.
So esentially with every new Provider we get a new pipe line of information so we can create many instances of Provider with seperate information.
So now we are overriding the default value that we provided in the Langauagecontext.js to this value because we are wrapping our component with the Provider.




 */