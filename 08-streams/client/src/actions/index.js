import streams from '../apis/streams';
import {SIGN_IN,
        SIGN_OUT,
        CREATE_STREAM,
        FETCH_STREAMS,
        FETCH_STREAM,
        DELETE_STREAM,
        EDIT_STREAM
    } from './types';
    import history from '../history';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = (formValues) => async(dispatch,getState) => {
    const { userId } = getState().auth;
        const response = await streams.post('/streams', {...formValues, userId});
        dispatch({type: CREATE_STREAM, payload: response.data })
        //Here we navigate to the streams page.
        history.push('/');
    };

export const fetchStreams = () => async dispatch => {
    const response = await streams.get(`/streams`)
    dispatch({type: FETCH_STREAMS, payload: response.data})
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`)
    dispatch({type: FETCH_STREAM, payload: response.data})
};

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues) // the values we want it to updatw with.
    dispatch({type: EDIT_STREAM, payload: response.data})
};


export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`)
    dispatch({type: DELETE_STREAM, payload: id })
};

/*
We use redux thunk to create a new function with dispatch as the argument.
We post to /streams with the values we want.
We then take redux thunk and dispatch the action to our reducers. So it wont return a promise(function) it will return an object so the reducers wont reject it.

We want also from our state the userId when creating a stream so we can determine if its their stream or not.
We fetch in our state thanks to redux-thunk and take out the userId from the auth property.
We then add that together with the formValues to our api.

We want to navigate after we have successfully called the API to our root directory. So we had to create our own history file so the router can navigate there. Please see history.js for more information.
 */