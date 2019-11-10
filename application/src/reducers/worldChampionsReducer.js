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
    REQUEST_WORLD_CHAMPIONS: handleWorldChampsRequest,
    REQUEST_NUMBER_OF_WORLD_CHAMPIONS: requestNumOfWorldChamps,
    COMPLETE_WORLD_CHAMPIONS_REQUEST: fetchChampByYearComplete,
});

export default worldChampionsReducer;
