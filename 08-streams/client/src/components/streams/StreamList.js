import React from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchStreams} from '../../actions';

 class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }

     renderAdmin(stream) {
         if(this.props.currentUserId === stream.userId) {
             return (
                 <div className="right floated content">
                     <button className="ui button primary">
                         Edit
                     </button>
                     <button className="ui button negative">
                         Delete
                     </button>
                 </div>

             )
         } else
         return null

     }

    renderList() {
        const stream = this.props.streams.map( stream => {
            return (
                <div className="item" key={stream.id}>
                     {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">
                            {stream.description}
                        </div>
                       
                    </div>
                    
                </div>
                )  
        });
       return stream 
    }

    renderCreate() {
        console.log(this.props.signedIn)
        if(this.props.signedIn) {
            return (
                <div style={{ textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                    Create Stream
                    </Link>
                </div>

            ) 

        } else
        return null
    }
    
    render() {
        
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        ) 
    }
}

const mapStateToProps = (state) => {

    console.log(state)
    return { streams: Object.values(state.streams),
             currentUserId: state.auth.userId,
             signedIn: state.auth.isSignedIn
    }

}

export default connect(mapStateToProps, { fetchStreams } )(StreamList);

/*
Object.values takes the values of the object and converts it to an array.

We connect our action creator to this component.
When we call the action creator, the action creator calls the api to fetch all the streams.
The dispatch gives it to the reducer.
The reducer will convert it to an object to our state
We get that object of streams from our state and we convert it to an array.
 */