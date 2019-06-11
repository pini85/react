import { combineReducers } from 'redux';

 const songsReducer = () => {
    return [
        { title: 'NO Scrubs', duration: '4:05' },
        { title: 'Macerena', duration: '2:05' },
        { title: 'No Diggity', duration: '6:05' },
        { title: 'Yo', duration: '1:00' }
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
