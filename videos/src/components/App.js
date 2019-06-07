import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q:{term}
            }
        });
    }
    
    render() {
        return (
            <div className="ui container">
                <SearchBar submittedForm ={this.onTermSubmit} />
            </div>

        ); 
    }
};

export default App;