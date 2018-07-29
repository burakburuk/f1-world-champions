import objectAssing from 'object-assign';
import {updateObject, createReducer} from './reducerUtilities';

const handleWorldChampsRequest = (worldChampionsState, action) => {
    return updateObject(worldChampionsState, {startYear: action.startYear, endYear: action.endYear, isLoaded: false});
};

const requestNumOfWorldChamps = (worldChampionsState, action) => {
    return updateObject(worldChampionsState, {startYear: action.startYear, endYear: action.endYear, isLoaded: false});
};

const fetchChampByYearComplete = (worldChampionsState, action) => {
    let _map = objectAssing(worldChampionsState.list);
    _map.set(action.year, action.champion);
    return updateObject(worldChampionsState, {list: _map});
};

const startAllChampsByYearRequest = (worldChampionsState, action) => {
    return updateObject(worldChampionsState, {
        popupChampionsByYearOpen: true,
        selectedYear: action.selectedYear,
        listByYear: []
    });
};

const completeAllChampsByYearRequest = (worldChampionsState, action) => {
    return updateObject(worldChampionsState, {listByYear: action.champions, selectedDriverId: action.selectedDriverId});
};

// Slice reducer
const worldChampionsReducer = createReducer([], {
    'HANDLE_ALL_CHAMPIONS_REQUEST': handleWorldChampsRequest,
    'REQUEST_NUMBER_OF_WORLD_CHAMPIONS': requestNumOfWorldChamps,
    'FETCH_CHAMPION_BY_YEAR_COMPLETE': fetchChampByYearComplete,
    'START_ALL_CHAMPIONS_BY_YEAR_REQUEST': startAllChampsByYearRequest,
    'COMPLETE_ALL_CHAMPIONS_BY_YEAR_REQUEST': completeAllChampsByYearRequest,
});

export default worldChampionsReducer;