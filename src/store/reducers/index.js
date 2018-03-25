import { combineReducers } from 'redux';
import sessionReducer from './session.reducer';

const rootReducer = combineReducers({
    session: sessionReducer
});

export default rootReducer;