import { createStore, combineReducers, applyMiddleware, compose as reduxCompose } from "redux";
import thunk from 'redux-thunk';

import { utilsReducer } from './utils.redux';

const compose = typeof window !== 'undefined' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose : reduxCompose;

const rootReducer = combineReducers({
    utils: utilsReducer
});

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);

export default store;
