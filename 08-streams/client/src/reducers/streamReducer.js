import _ from 'lodash/omit';
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM

} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_STREAMS:
            const newObj = {};
            action.payload.forEach(element => {
                newObj[element.id] = element;
            });
            return { ...state, ...newObj };
            //With lodash:
            // return { ...state, ..._.mapkeys(action.payload, 'id')}       
       case FETCH_STREAM:
           return { ...state, [action.payload.id]: action.payload }
       case CREATE_STREAM:
           return { ...state, [action.payload.id]: action.payload }
       case EDIT_STREAM:
           return { ...state, [action.payload.id]: action.payload }
       case DELETE_STREAM:
           return _.omit(state, action.payload) // no need to write action.payload.id because in our action creator id is the only value.
        default:
            return state;
    }
}


/*
_.mapkeys(action.payload, 'id') basically converts an array into an object.
We receive from the json an array of objects. mapkeys takes each object looks for the the value of the key of id and takes that value and assigns the key name of that object with that value.
We are structuring our reducers as an object. With an array to update  we would need to do this:

Array-based approach:

const updateStream = (state=[], action) => {
    switch (action.type) {
        case EDIT_STREAM:
        return state.map(stream => {
            if(stream.id === action.payload.id) {
                return action.payload;
            } else {
                return stream;
            }

        });
        default:
            return state;
    }
}

This is a lot of code to write

Object-based approach:

const updateStream = (state={}, action) => {
    switch (action.type) {
        case EDIT_STREAM:
            const newState = { ...state } 
            newState[action.payload.id] = action.payload
            return newState;
        default:
            return state;
    }
}

We need to return a new object for the reducer to update the state

But there is an even easier shorter way to do this:

const updateStream = (state={}, action) => {
    switch (action.type) {
        case EDIT_STREAM:
            return {... state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}

We dont know what value is for the  key we want to add to the object. We know it will be the action.payload.id but now we dont know the exact value of that key yet.

This is key interpolation.
For example:
const obj = {};
const animal: 'lion';
const sound: 'roar';
{...obj, [animal]: sound}
{lion: 'roar'}


 */