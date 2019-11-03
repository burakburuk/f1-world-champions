import objectAssing from 'object-assign';
import { updateObject, createReducer } from './reducerUtilities';
import initialState from './initialState';

const handleWorldChampsRequest = (worldChampionsState, action) => updateObject(worldChampionsState, action);

const requestNumOfWorldChamps = (worldChampionsState, action) => updateObject(worldChampionsState, action);

const fetchChampByYearComplete = (worldChampionsState, action) => {
    const map = objectAssing(worldChampionsState.list);
    map.set(action.year, action.champion);
    return updateObject(worldChampionsState, { list: map });
};

// Slice reducer
const worldChampionsReducer = createReducer(initialState.worldChampions, {
    HANDLE_ALL_CHAMPIONS_REQUEST: handleWorldChampsRequest,
    REQUEST_NUMBER_OF_WORLD_CHAMPIONS: requestNumOfWorldChamps,
    FETCH_CHAMPION_BY_YEAR_COMPLETE: fetchChampByYearComplete,
});

export default worldChampionsReducer;
