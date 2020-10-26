import ACTIONS from './actionTypes';


// set default state values
const defaultState = {
    users: []
};


// define the reducer
const reducer = ( state = defaultState, { type, payload } ) => {

    switch( type )
    {
        case ACTIONS.SET:
            return { ...state, users: payload.users };

        default:
            return state;
    }

};

export default reducer;