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
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                     <Link to={`/streams/delete/${stream.id}`} className="ui button negative"> Delete</Link>
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
                        <Link to={`streams/${stream.id}`} className="header">
                        {stream.title}
                        </Link>
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

We can use 2 different approaches when a user clicks on edit button to communicate what stream does he want to edit
1)Selection reducer approach
Like one the first project with song selection (redux basics) when we clicked on a song we updated that song to the selected song reducer with on click.
2) URL-based selection(ReactRouterDom)
/stream/edit/:id
:id = is a variable. It can be anything. because of the : (so we could of put also :anything)We want it to be the id of the stream in this case.
 */