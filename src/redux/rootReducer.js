import { combineReducers } from 'redux';
import usersReducer from './users/reducer';


// combine all reducers and export them as one
const rootReducer = combineReducers({
    users: usersReducer 
});

export default rootReducer;