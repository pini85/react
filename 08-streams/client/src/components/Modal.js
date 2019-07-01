import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={ (e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('.modal')
    );
};

export default Modal;

/*
We want to create a modal for the delete section. But the problem is that we want the modal to cover the whole html page with a z index. 
In css if a parent component of a modal has a z-index and a position: relative,abolute,fixed it will create a stack context and make the children that z-index. You cna eventully have confilcts with your css if you change the z-index of that parent element or the other elements that conflict with the outter body of the modal. So we use portals to essentially say this div with the modal we will take it away form the react flow and place it connected right after the body tag. So that parent element wont interfere with the z-index any longer.
Most use cases for using portals is using 3rd party libaries, modal windows.

creatPortal had 2 arguments.
1st argument the JSX you want to put on the screen.
2nd argument the parent you want to place your modal
We shouldn't attach it directly under the body because that portal will replace all the content in the body.
Instead manually create a div in the index.html and attach it there.

We want to handle an effect if a user clicks outside the body of the modal to dismiss the modal. We need to create onClick handler to say if you click here we will take you the root dierctory thanks to our created histroy object.
Now the problem is the event is bubbling up. If you click inside the modal the event will bubble up until they meet an event handler that has a onClick on them. To prevent this we add a callback function with the event as an argument and say stopPropagation() to stop the bubbling up.

We want the modal to be reusable. so we wont hardcode the title content and action and onCLick. Instead we get them as props from the parent component.
 */