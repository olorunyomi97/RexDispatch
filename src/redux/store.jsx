import { createStore,applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    // rootBusinessReducer,
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
);
export default store;