import { createStore } from 'redux';
import cartReducer from './reducer/cart'

const storeRN = createStore(cartReducer);

export default storeRN 