import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import authReducer from './authReducer';

export default combineReducers({
    notes: notesReducer,
    isAuth: authReducer,
});