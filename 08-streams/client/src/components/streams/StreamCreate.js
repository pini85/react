import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { createStream} from '../../actions/index';

class StreamCreate extends React.Component {

    renderError(meta) {
        if(meta.touched && meta.error) {
            return (
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            );
        };
    };
    renderInput = (formProps)  => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div>
            // onChange={formProps.input.onChange}
            // value={formProps.input.value}
            // />
        );
    };

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button>Submit</button>
            </form>
        );
    };
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = "You must enter a title";
    } 
    if (!formValues.description) {
        errors.description = "You must enter a description";
    }
    return errors

}
const formWrapper = reduxForm({
    form: 'streamCreate',
    validate: validate
    })(StreamCreate);

    export default connect(null, {
        createStream
    })(formWrapper)

/*
Field is a component. Hence, capital letter. We use this Field component anytime we want to show a user a Field. It is some kind of input. It can be a checkbox radio button. Drop down. Text input.

Name prop is mandotary. It is the Fields property name which will bel inked to redux-forms.

Field does not show anything to the user. The omponent prop will be the one that shows to the user. It can be a component, a function. Anything that returns JSX.

redux-form is essentially like connect. It connects to the state and gives us the props like mapStateToProps gives us.
We need to wrap StreamCreate with redux-form to tell them this is the component it needs to connect to.

We need to include from the redux-form props onChange and value so we can hook thme up to our redux-form which will give it to our redux state. We get all of these with ...formProps.input

redux-form doesnt know what to do with additional props in the Field component. So whatever props we give it, it will automativally go to the component props of the Field compoenent.
This is the place to put the label,

We do not need to use event,preventDefault() on onSubmit because redux-forms handleSubmit does this. We give it the argument for a callback whateverwe want to run after the form is submmited which is onSubmit. Here we can get the values out of the form to do something with them.


Validation:
Validation will be called anytime a form is rendered or a user interacts with it.
Once we submit the form it will go through redux-form validate function. Here we can specify what validation we want to give. And we need to return the object.If we return an object with a key and value it will see that something went wrong and wont submit the form. If we return an empty object it will assume that nothing went wrong and it will continue to submit the form.
Once we return an object redux-form will rerenders our componenet.
Each FIELD rerendered with the error message from the ERRORS object. So name="title" in the Field componenet wil get matched with errors.title from the erros object. 
So it will basically take that error message and pass it to component={this.renderInput} function.
It will be in the props meta object under error.

Now we want to use our action creator to get the formValues.
We need to hookup connect to connect with the action creator. But the problem is we have already redux-form that ives us the props. What we need to do is wrap up the redux-form expression as a 2nd argument to the connect. Nicest way to do this is to set the form-redux expression as a variable and wrap that variable to make it easier on the eyes.

When a user types in an input. We validate it. If it passed, it will go to the onSubmit function which the values will be passed to our action creator.

*/