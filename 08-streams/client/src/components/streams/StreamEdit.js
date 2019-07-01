import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import  StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        if(this.props.stream) {
            return (
                <div>
                    <h3>Edit Stream</h3>
                    <StreamForm initialValues={{ title: this.props.stream.title, description: this.props.stream.description}} onSubmit={this.onSubmit} />
                </div>
            )
        } else {
            return <div>Loading</div>
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]};

}

export default connect(mapStateToProps,
    {fetchStream, editStream}
    )(StreamEdit);

/* 
We have history,location and match props thanks to the Route component.
We are interested in match props. Inside their there is 
params:
id: "1" thanks to the /:id

We want to communicate the params with the current stream so we can get the information from the stream.
Problem is our component knows the stream id thanks to the params and the mapStateToProp knows the streams thanks to state.
We can get all the props of the component with mapStateToProps with the 2nd argument ownProps.
We hooked all the objects with the key of their id so we can fetch the stream we want with its id.

Understanding the react router:
We came to an unexpected behaviour when we type in the edit url our ownProps stream: undefined. It is because our state is empty. We only get the streams in the StreamList when we fetch the streams and update our state. So from there, when we click on the edit button. Our ownProps stream wont be undefined because our state will have them.

Rule with react router:
We always need to make sure that any component that is going to be shown on a screen is going to be
designed to work by itself or in isolation.
So essentially that means that every component that re-act router does is going to show needs to fetch
its own data.
We really cannot assume that any given component will get access to some data that might have been loaded
up previously inside the application.

So we fetch the stream we want and update our state with it.

initialValues
ReduxForm gives us a prop called initialValues. We cna put on the form values we want if they match the Field name that are the same in the Field component in the reduxForm.
We just want the title and the description from the object. If we would of done this.props.stream, it would give us also the id and userId. Some apis can give you an error thatr theu dont want them.
We are passing an initalValue prop to StreamForm. StreamForm is wrapped up with redux-form. Redux-formsees this prop and renders it.
*/