import React from 'react';
import { connect } from 'react-redux';
import { selectedSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                         className="ui button primary"
                         onClick ={ ()=> this.props.selectedSong(song)}
                         >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className=" ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs}; // this is all our state coming from the redux store. And we take the songs object what this componenent needs to render. And of course we will set it as an object because we may have many different props not only one. This function will be called automatically once the store is updated.
}
export default connect(mapStateToProps, {
    selectedSong: selectedSong
})(SongList);
//We pass our state to the connect component
/*
We call this connect function which is a react component so it can call the Provider to get the relevant data from the redux Store.
Connect is a funtion that returns a function we invoke the 2nd function with SongList. Hence ()(SongList)
We're specifically telling this connect component that we want to get a list of songs out of our redux
store from the provider.
So anytime that our list of songs in our redux store changes that provider is going to automatically
notify our connect function and the connect function is then going to pass our list of songs
down to our song list component.

1)We created Reducers which got incapsulated to combineReducers object.(reducers/index.js)
2)We call that object with the reduxs createStore method and give it to the Provider coming from react-redux as a prop
<Provider store ={createStore(reducers)}> (index.js) 
Now our Provider has a reference of our state
3) We pass in the connect component and attach this component to it.

//Reducers//
4) We create a mapStateToProps function and select the specific reducers we want this component have access to and include it in our connect component.
5) Now our component has acesss to these reducers via a prop which is coming from Provider which it gets from createStore which is our state.

//Actions//
6) Our 2nd argument to the connect component is our actions. We first include our actions in our import.
We do it via connect because 
a) we need to tell connect that this is an action not a normal js function.
b) we need to call the dispatch method (which is included in the connect component which looks at all the functions included inside this object and wraps them up in another function ) on them so it can check and see in the reducers have the same type as the action.
7) If they have the same type it will be included in the reducer. Which in turn will update the combineReducers object which in turn will update the creatstore in redux which in turn will update our state so our mapStateToProp function will get updated as well.
FUCKING HELL


)We are getting our state from the redux store
5)The redux store gives it to the Provider

*/