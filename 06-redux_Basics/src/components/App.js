import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
//we dont need to specify the index.js because webpack autmatically looks at the directory if no specific file was searched and automatically add the index.js

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    ); 
};

export default App;