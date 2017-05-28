/**
 * Created by eicyan on 2017/5/27.
 */
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducer';

const reducer = combineReducers(reducers);

let store = applyMiddleware(thunk)(createStore)(reducer);

export const Store = store;