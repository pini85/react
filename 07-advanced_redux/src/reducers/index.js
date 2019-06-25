import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer';

export default combineReducers({
    posts: postsReducer,
    usersFromHeaderAction: userReducer
});

//Rules for Reducers//
/*

export default (state, action) => {
    return 123;
}

export 
1) Must return any value besides 'undefined'
2) Produces 'state' or data to be used inside of your app using only previous state and the action 
When I application first runs it will go through our reducers and initialize it for the first time. It will pass first 2 arguments undefined and Action #1 and return a state.
This is why we always put a default value in our reducer (selectedSong = null) because if not it will return undefined. 
Then it will take our action and place it to the state. 
What happens the 2nd time the reducers are called 1st argument is the previous state and 2nd argument is the action # 2. It keeps on going like this.
3) Must not return reach 'out of itself' to decide what value to return (reducers are pure)
No returning anything else but the state and the aciton. No document.querySelector or axiois or anything like that.
4) Must not mutate its input 'state' argument
arrays
state.pop()
state.push()
objects
state.name

We definetly can mutate it but reading the source code from redux if we do. Then all our state will get rerendered not just the reducer in question.
In the source code it says if NextState =! previousState is true then we will rerender the next state. But if they are the same then we return state.
So what we can do is to return state at the reducers and then redux's function will return false
So what we do if we want to delete insert or update an array or object we use methods that create a new array or object. Please see the png.

Strings and numbers cannot be mutable. 
 */