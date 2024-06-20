import { combineReducers } from 'redux';
import authReducer from './general/auth/authReducer';
import businessReducer from './business/buisnessauth/BusinessauthReducer';
import Message from './message';

export default combineReducers({
    auth: authReducer,
    business: businessReducer,
    message: Message,
});