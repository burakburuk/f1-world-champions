import { combineReducers } from 'redux';
import championsReducer from './championsReducer';

const rootReducer = combineReducers({
    champions:championsReducer
});

export default rootReducer;