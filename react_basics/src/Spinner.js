import React from 'react';

const Spinner = (props) => {
   
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

export default Spinner;

Spinner.defaultProps = {
    message: 'Loading...'
}

//you can add default props to your components if you didnt set one yourself.