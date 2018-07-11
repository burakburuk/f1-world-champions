import {combineReducers} from 'redux';
import championsReducer from './championsReducer';
import worldChampionsReducer from './worldChampionsReducer';

const rootReducer = combineReducers({
    champions: championsReducer,
    worldChampions: worldChampionsReducer,
});

export default rootReducer;
