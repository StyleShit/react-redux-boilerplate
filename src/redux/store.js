import { applyMiddleware, createStore } from 'redux';
import { apiMiddleware } from './middlewares/api';
import rootReducer from './rootReducer';

// export the Redux store with the root reducer
const store = createStore( rootReducer, applyMiddleware(
    apiMiddleware
));

export default store;