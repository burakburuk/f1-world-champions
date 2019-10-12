import { combineReducers } from 'redux';
import championsReducer from './championsReducer';
import worldChampionsReducer from './worldChampionsReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
    champions: championsReducer,
    worldChampions: worldChampionsReducer,
    notification: notificationReducer,
});

export default rootReducer;
