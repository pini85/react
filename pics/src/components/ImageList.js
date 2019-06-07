import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard';

const ImageList = (props) => {

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} /> 
    });
    return (
        <div className="image-list">
            {images}
        </div>  
    ); 
};
export default ImageList;

/*
We give it a key prop so that react knows when it updates the dom and rerenders it will only rerender the unique elements. So it will be more performant.
 */
