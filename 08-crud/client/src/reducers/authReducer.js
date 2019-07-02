import {SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload }

        case SIGN_OUT:
                return { ...state, isSignedIn: false, userId: null }
                // When they sign out you dont want their id hanging around.
        default: 
            return state;
    }
}