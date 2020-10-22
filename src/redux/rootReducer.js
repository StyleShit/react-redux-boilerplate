import { combineReducers } from 'redux';
import dataReducer from './data/reducer';


// combine all reducers and export them as one
const rootReducer = combineReducers({
    data: dataReducer 
});

export default rootReducer;