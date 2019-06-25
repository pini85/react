import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (error) => console.log(error)
//     );
//     return <div>Hi there!</div>
// }

class App extends React.Component {
    // constructor(props) {
    //     super(props);//Super is a reference to the parent's constructor function so we wont overirde it.
    //     // This is the only time we refer to this.state!
    //     this.state = { lat: null, errorMessage: ''};// We must define a value intialilly. We know its a number but we dont have it yet so this is way we put it ias null. Its a number but we dont know what it is.
    // }
    state = { lat: null, errorMessage: '' };
    // As we know we don't need to manually write the constructor method. It gets automatically called. So we can not call it and initialize our state by this syntax and babel will include it in our constructor. This is easier to read.

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error =>this.setState({errorMessage: error.message})
                // A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
        );

        // const date = new Date().getMonth();
        // this.setState({month: date})
    }

    /* So in general anytime we make a component we always try as much as possible to have to not have multiple
      return statements inside the render method.
      If we ever have to have conditional logic as you see right here we're always going to instead put it
      into a helper method.
*/
    renderContent () {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat = {this.state.lat} />
            //We pass the state as a prop to this child componenet.
        }
        return <Spinner message="Please accept location request" />
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        ); 
    }
}
// Remember when we return JSX same principles apply with the return (

ReactDOM.render(<App/>, document.querySelector('#root')) 




/*
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






 */