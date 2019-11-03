import { combineReducers } from 'redux';
import winnersInSeasonReducer from './winnersInSeasonReducer';
import worldChampionsReducer from './worldChampionsReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
    champions: winnersInSeasonReducer,
    worldChampions: worldChampionsReducer,
    notification: notificationReducer,
});

export default rootReducer;
