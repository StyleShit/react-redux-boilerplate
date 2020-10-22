import ACTIONS from './actionTypes';


// store users array
export const setUsers = users => {

    return {
        type: ACTIONS.SET_USERS,
        payload: {
            users: users
        }
    };

}