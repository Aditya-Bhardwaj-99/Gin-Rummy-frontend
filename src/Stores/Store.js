import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CombineReducers from '../Reducers/CombineReducers';

export default function configureStore() {
 return createStore(
    CombineReducers,
    applyMiddleware(thunk)
 );
}