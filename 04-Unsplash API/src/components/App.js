import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };
 /*We are creating a function that we pass to the props. The value we are getting is from the child SearchBar.*/
    onSearchSubmit = async (term) =>  {
        // we had to create an array function so we can find the this.
        const response = await unsplash.get('/search/photos', {
            params: {query: term},      
        });// .then( response => {
            //     console.log(response.data.results)
        console.log(this)
        this.setState({ images: response.data.results })

    }
    render() {
        return (
            <div className="ui container">
                <SearchBar runMeWhenUserSubmits = {this.onSearchSubmit} />
               <ImageList images={this.state.images} />
       
            </div>
    
        ); 
    } 
}

export default App;

/*
Component renders itself one time with no list of images
onSearchSubmit method called
Request made to splash
Wait...
Request complete
Set image data on state App componnen
App component rerenders and show images
 */

