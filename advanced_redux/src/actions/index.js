import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

// export const fetchPosts = async () => {
//     const response = await jsonPlaceHolder.get('/posts');
//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     };
// };


/*
We get this error in the console:

Error: Actions must be plain objects. Use custom middleware for async actions.

1) As we know this syntax babel takes and replaces it with es5 syntax. And when we write async and await it does not return an object.
It returns jsonPlaceHolder.get('/posts) and this is dispatched to the redux store amd it rejects it because it needs return an object. We returned a request object.  
Also it wont work taking the async and await off because it will return only a promise not the requested data from the api becuase what happens here is this:

Action creator called           Request made to API
Action returned
Action send to all reducers
Reducers run
NO DATA 


                                We get a Response!

So we use a middleware. We are using redux-Thunk. It basically takes an action and you have the option to return a function or an object. That function gets 2 arguments inside redux thunk. Dispatch and getState.
Dispatch gives it the power to change any data we want and through getState we can read or access any data we want.
So before it goes to our reducers if our action is a function, we invoke the middlewares dispatch function. 
We can manually dispatch an action at some point in the future.
So we wait until our request to the api is finished. Once we have the data we dispatch our action.
 When we dispatch it, it will become an new action again but  without a function and it will be sent to dispatch as a normal cycle and since it is not a function it will be sent to the reducers.

 To make it work we need to hook up the middleware into our redux store in index.js
 
 */


//Now the code below we only fetch the data once from fetchUser with the ids we are interested in and store it in our state
 export const fetchPostsAndUsers = () => async (dispatch, getState) => {

     await dispatch(fetchPosts());
     //Without lodash. We get the uniqIds with new Set and iterate over the posts to get the userId
     //redux-thunk has a 2nd argument that can get the state from the redux store. So we can get the posts userIds
     const userIds = new Set(getState().posts.map(({ userId }) => userId))
    //With lodash:
    //  const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => {
        dispatch(fetchUser(id))
        //Now we only got the ids we are interested in. Not all the user ids.
    })
 };
/* We need to make sure that when we call this action creator whatever action or whatever function it returns gets dispatched as well. So the inner function of fetchPosts is going to go to redux thunk and get invoked.So it goes into that entire pipeline of being dispatch goes through the middlewares and eventually goes into the reducers. We put the await keyword to wait for the other action creator to get the api data.
When we call fetchPosts() it will return 
async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response.data})
};   
this inner function here. We make sure we dispatch this inner function so it will show in redux-thunk and get invoked with its dispatch.
Remember middleware takes that dispatch function and then creats a new aciton on it and then it gets send to dispatch again and ito the reducers. So we need to dispath fetchPosts from fetchPostsandUsers 

*/






// export const fetchPosts = async () => {
//     return async (dispatch, getState) => {
//         const response = await jsonPlaceHolder.get('/posts');
//         dispatch({ type: 'FETCH_POSTS', payload: response})
//     };    
// };

//Refactor to ES6 syntax:

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response.data})
};   


export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch ({ type: 'FETCH_USER', payload: response.data})

}

// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch)
   
// };

// const _fetchUser = _.memoize( async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data})
// })
/**
 What memoize does from loadash is essentially calling this function only once. Before we called fetchUsers everytime the PostList iteratted. So 100 times. Memoize says if its the function we wont call it again, we will give you the same value the was perviously. We had to type out 2 functions so that we wont call redux-thunk everytime. Only once.
 The down side of using memoize is you can only use it once because you only get the value once so if you want to do an update to the user or fetch the data again, you cannot. You would then need to create a new action to do so.
 */