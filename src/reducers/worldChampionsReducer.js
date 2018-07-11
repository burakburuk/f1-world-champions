import * as actionTypes from '../constants';
import objectAssing from 'object-assign';

export default function worldChampionsReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.HANDLE_ALL_CHAMPIONS_REQUEST:
            return objectAssing({}, state, {startYear: action.startYear, endYear: action.endYear, isLoaded: false});
        case actionTypes.REQUEST_NUMBER_OF_WORLD_CHAMPIONS:
            return objectAssing({}, state, {numberOfWorldChampions: action.numberOfWorldChampions});
        case actionTypes.FETCH_CHAMPION_BY_YEAR_COMPLETE:
            let _map = objectAssing(state.list);
            _map.set(action.year, action.champion);
            return objectAssing({}, state, {list: _map});
        case actionTypes.START_ALL_CHAMPIONS_BY_YEAR_REQUEST:
            return objectAssing({}, state, {
                popupChampionsByYearOpen: true,
                selectedYear: action.selectedYear,
                listByYear: []
            });
        case actionTypes.COMPLETE_ALL_CHAMPIONS_BY_YEAR_REQUEST:
            return objectAssing({}, state, {listByYear: action.champions, selectedDriverId: action.selectedDriverId});
        case actionTypes.CLOSE_CHAMPIONS_BY_YEAR_POPUP:
            return objectAssing({}, state, {popupChampionsByYearOpen: false});
        default:
            return state
    }
}
