import { combineReducers } from 'redux';
import {cartReducer} from './cart';
import {orderReducer} from './order';

const reducer = combineReducers ({cartReducer, orderReducer});

export default reducer;