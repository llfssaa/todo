import {applyMiddleware, combineReducers, createStore} from 'redux';
import {TodoReducer} from './reducers/TodoReducer';
import {composeWithDevTools} from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    todo: TodoReducer,


})
export type ReducersType = ReturnType<typeof reducers>

export const store = createStore(reducers, composeWithDevTools(applyMiddleware()));
