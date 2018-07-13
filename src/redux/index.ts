import { createStore, combineReducers, applyMiddleware, compose as reduxCompose } from "redux";
import thunk from 'redux-thunk';

import { todoReducer } from './todo.redux';

const compose = typeof window !== 'undefined' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose : reduxCompose;

const rootReducer = combineReducers({
    todo: todoReducer
});

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);

export default store;
