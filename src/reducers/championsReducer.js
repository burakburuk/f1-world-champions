import * as actionTypes from '../constants';
import objectAssing from 'object-assign';

export default function championsReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.REQUEST_NUMBER_OF_CHAMPIONS_IN_SEASON:
            return objectAssing({}, state, {numberOfChampionsInSeason: action.numberOfChampionsInSeason});
        case actionTypes.COMPLETE_NUMBER_OF_CHAMPIONS_IN_SEASON:
            return objectAssing({}, state, {numberOfChampionsInSeason: action.numberOfChampionsInSeason});
        case actionTypes.HANDLE_ALL_CHAMPIONS_REQUEST:
            return objectAssing({}, state, {isLoaded: false});
        case actionTypes.START_ALL_CHAMPIONS_BY_YEAR_REQUEST:
            return objectAssing({}, state, {
                popupChampionsByYearOpen: true,
                selectedYear: action.selectedYear,
                listByYear: []
            });
        case actionTypes.COMPLETE_ALL_CHAMPIONS_BY_YEAR_REQUEST:
            return objectAssing({}, state, {listByYear: action.champions, selectedDriverId: action.selectedDriverId});
        default:
            return state
    }
}
