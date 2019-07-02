import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import { createStream} from '../../actions/index';

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }
    render() {
        return (
            <div>
                <h3>Create a stream</h3>
                <StreamForm  onSubmit={this.onSubmit}/>
            </div>
        );
    };
};

    export default connect(null, {
        createStream
    })(StreamCreate)

/*
We refactored our Form so that we put all the logic in StreamForm so we can reuse that component.
We put a callback in StreamForm with onSubmit. So we get the data from here and submit it in StreamForm

*/