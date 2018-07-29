import {updateObject, createReducer} from './reducerUtilities';

const requestNumOfChampsInSeason = (championsState, action) => {
    return updateObject(championsState, action);
};

const completeNumOfChampsInSeason = (championsState, action) => {
    return updateObject(championsState, action);
};

const handleAllChampsRequest = (championsState, action) => {
    return updateObject(championsState, {isLoaded: false});
};

const startAllChampsByYearRequest = (championsState, action) => {
    return updateObject(championsState, {
        popupChampionsByYearOpen: true,
        selectedYear: action.selectedYear,
        listByYear: []
    });
};

const completeAllChampsByYearRequest = (championsState, action) => {
    return updateObject(championsState, {listByYear: action.champions, selectedDriverId: action.selectedDriverId});
};

const closeChampsByYearPopup = (championsState, action) => {
    return updateObject(championsState, {popupChampionsByYearOpen: false});
};

// Slice reducer
const championsReducer = createReducer([], {
    'REQUEST_NUMBER_OF_CHAMPIONS_IN_SEASON': requestNumOfChampsInSeason,
    'COMPLETE_NUMBER_OF_CHAMPIONS_IN_SEASON': completeNumOfChampsInSeason,
    'HANDLE_ALL_CHAMPIONS_REQUEST': handleAllChampsRequest,
    'START_ALL_CHAMPIONS_BY_YEAR_REQUEST': startAllChampsByYearRequest,
    'COMPLETE_ALL_CHAMPIONS_BY_YEAR_REQUEST': completeAllChampsByYearRequest,
    'CLOSE_CHAMPIONS_BY_YEAR_POPUP': closeChampsByYearPopup,
});

export default championsReducer;
