import ACTIONS from './actionTypes';


// store users array
export const setUsers = users => {

    return {
        type: ACTIONS.SET,
        payload: {
            users: users
        }
    };

}