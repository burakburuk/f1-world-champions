import { updateObject, createReducer } from './reducerUtilities';
import initialState from './initialState';

const requestNumOfWinnersInSeason = (championsState, action) => updateObject(championsState, action);

const completeNumOfWinnersInSeason = (championsState, action) => updateObject(championsState, action);

const startAllChampsByYearRequest = (championsState, action) => updateObject(championsState, {
    isDialogOpen: true,
    selectedYear: action.selectedYear,
    list: [],
});

const completeAllChampsByYearRequest = (championsState, action) => (
    updateObject(championsState, {
        list: action.champions,
        selectedDriverId: action.selectedDriverId,
    })
);

const closeChampsByYearPopup = (championsState, action) => updateObject(championsState, action);

// Slice reducer
const winnersInSeasonReducer = createReducer(initialState.winnersInSeason, {
    REQUEST_NUMBER_OF_WINNERS_IN_SEASON: requestNumOfWinnersInSeason,
    COMPLETE_NUMBER_OF_WINNERS_IN_SEASON_REQUEST: completeNumOfWinnersInSeason,
    REQUEST_WINNERS_BY_YEAR: startAllChampsByYearRequest,
    COMPLETE_WINNERS_BY_YEAR_REQUEST: completeAllChampsByYearRequest,
    CLOSE_WINNERS_BY_YEAR_POPUP: closeChampsByYearPopup,
});

export default winnersInSeasonReducer;
