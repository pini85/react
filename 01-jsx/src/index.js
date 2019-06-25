//Import the React and ReactDOM libaries
import React from 'react';
import ReactDOM from 'react-dom';

// const buttonText = () => 'click me!!!'
const buttonArray = ['click',' ','me!'];
const buttonTextObject = {text: 'Click me!'}
// 

// Create a react component
/*
Must have something after return
inline styles with {{backgroundColor: 'blue}}. First {} : js variable in JSX 2nd {} js object
You cannot render text displayed as an object. Write instead object.property. But if it isnt rendering text you can use an object like with the inline style.
 
 */
const App = () => {
    const buttonStyle = {backgroundColor: 'blue', color: 'white'}
    
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
          
            <button style={buttonStyle}>
                {buttonTextObject.text} 
            </button>
        </div>
    );
};
// Take the react component and show it on the screen

ReactDOM.render(
    <App/>,
    document.querySelector('#root')

);
//I want to render the instance of the app component and i want to render it to the div which is called root which all react html has set up.