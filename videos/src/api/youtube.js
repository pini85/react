import axios from 'axios';
const KEY = 'AIzaSyBk9DxNL5Q9TgYyDU6aZyqeOs7qYfI5_dw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
    

});