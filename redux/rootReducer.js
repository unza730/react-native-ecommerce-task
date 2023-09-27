
import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer.js'
import authReducer from './reducers/authReducer.js';

const rootReducer = combineReducers({
     cart: cartReducer,
    auth: authReducer
  });
export default rootReducer;