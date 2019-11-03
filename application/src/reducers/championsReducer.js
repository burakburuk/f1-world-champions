import { updateObject, createReducer } from './reducerUtilities';
import initialState from './initialState';

const requestNumOfChampsInSeason = (championsState, action) => updateObject(championsState, action);

const completeNumOfChampsInSeason = (championsState, action) => updateObject(championsState, action);

const startAllChampsByYearRequest = (championsState, action) => updateObject(championsState, {
    popupChampionsByYearOpen: true,
    selectedYear: action.selectedYear,
    listByYear: [],
});

const completeAllChampsByYearRequest = (championsState, action) => (
    updateObject(championsState, { listByYear: action.champions, selectedDriverId: action.selectedDriverId })
);

const closeChampsByYearPopup = (championsState, action) => updateObject(championsState, action);

// Slice reducer
const championsReducer = createReducer(initialState.champions, {
    REQUEST_NUMBER_OF_CHAMPIONS_IN_SEASON: requestNumOfChampsInSeason,
    COMPLETE_NUMBER_OF_CHAMPIONS_IN_SEASON: completeNumOfChampsInSeason,
    START_ALL_CHAMPIONS_BY_YEAR_REQUEST: startAllChampsByYearRequest,
    COMPLETE_ALL_CHAMPIONS_BY_YEAR_REQUEST: completeAllChampsByYearRequest,
    CLOSE_CHAMPIONS_BY_YEAR_POPUP: closeChampsByYearPopup,
});

export default championsReducer;
