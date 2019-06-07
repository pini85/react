import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('cats') //Manually by default call this method when page is rendered to show cats
    }
    onTermSubmit = async(term) => {
        const response = await youtube.get('/search', {
            params: {
                q:{term}
            }
        });
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }
    
    onClick = (item) => {
      this.setState({ selectedVideo: item})
    }
    
    render() {
        return (
            <div className="ui container">
                <SearchBar submittedForm ={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos ={this.state.videos} clickedVideo={this.onClick} />
                        </div>
                    </div>
                </div>
              
            </div>

        ); 
    }
};

export default App;