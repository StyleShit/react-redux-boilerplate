import { createStore } from 'redux';
import rootReducer from './rootReducer';

// export the Redux store with the root reducer
const store = createStore( rootReducer );

export default store;