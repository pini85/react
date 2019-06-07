import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state = { spans: 0 };
    }

    componentDidMount() {
        // this.imageRef.current.ClientHeight === 0
    this.imageRef.current.addEventListener('load',this.setSpanRows);
    }
    
    setSpanRows = () => { //remember we use an arrow function so the this can be found.
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans: spans })
    
    }
    render() {
        console.log(this.state)
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                ref={this.imageRef}
                src={this.props.image.urls.regular} 
                alt={this.props.image.description}/>
                
            </div> 
        )
    }
}
export default ImageCard;

/*Now what we want to do is get the reference of how high the image is. And when we get that we can deterimne what row span to give it.
In vanilla Js we would do something like document.querySelector('img).clientHeight. In react in order to get access to an indvidual element in the dom we have something called Ref.
We need to specifiy this ref in the constructor.

Now the problem is that when we search for the clientHeight of thei mage it will return 0. Because 
We are trying to find the height the instant after the thing renders.
Now the instant after we have rendered this image the image itself has not actually loaded.
The dom element <img> is going to attempt to make a request to some outside service.
In this case unsplash to actually load up the raw image file. Via the URL tag. 
So basically the img tag is rendered to the screen and after that we try to request the url that will download the image.
We can solve this by adding an eventlistener and attach the event load. So only once it loaded we will look for the height.

*/
