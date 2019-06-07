import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,clickedVideo}) => {
    const videoItem = videos.map(video => {
        return  <VideoItem key={video}  video ={video} clickedVideo={clickedVideo} />
    });
    return <div className="ui relaxed divided list">{videoItem}</div>
}

export default VideoList
