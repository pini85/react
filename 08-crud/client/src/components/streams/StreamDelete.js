import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect} from 'react-redux';
import { fetchStream, deleteStream} from '../../actions';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component{
    componentDidMount() {
         this.props.fetchStream(this.props.match.params.id);
         //we want all componenets to get their own streams independently
       
        console.log(this.props);
    }

    renderActions() {
        const id = this.props.match.params.id
        return (
            <React.Fragment>
                <button onClick = { () => this.props.deleteStream(id) } className="ui button negative">Delete</button>
                <Link to = "/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }
    renderContent() {
        if (!this.props.stream) {
            return ' Are you sure you want to delete this stream?';
        }
        return `Are you sure you want to delete this stream with the title ${this.props.stream.title}`;
    }

    render() {
        return ( 
                <Modal
                title="Delete Stream"
                content= {this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
                />
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect( mapStateToProps, { fetchStream, deleteStream } )(StreamDelete);

/*
We want the modal component to become reusable so we wont hardcode the modal instead add the content it needs through props from here

We use React.Fragment because we are using semantic UI and always when we return JSX it needs to be wrapped up in a div. Now when we render this actions element to the screen. It will have a parent div which is <div className="actions">{props.actions</div> and inside we have another div. This what conflicts semantic ui.
So we can use React.Fragment which wont render any elements ot the screen.

Again you want to use this anytime you want to return multiple elements but not have some presence inside
the actual dom.
You can also shorten the syntax by typing this
<>
sgsgsfdsfgsg
</>
 */