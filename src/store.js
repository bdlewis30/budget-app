import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer/users';

export default createStore(reducer, applyMiddleware(promiseMiddleware()));