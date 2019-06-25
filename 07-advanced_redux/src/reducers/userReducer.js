export default (state =[], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];
        default:
            return state;
    }

}

//Here we are adding an indivual user each time to our state. Hence [...state, action.payload]