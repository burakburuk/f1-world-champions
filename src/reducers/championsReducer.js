import * as actionTypes from '../constants';
import objectAssing from 'object-assign';

export default function championsReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.HANDLE_ALL_CHAMPIONS_REQUEST:
            return objectAssing({}, state, { isLoaded:false});
        case actionTypes.COMPLETE_ALL_CHAMPIONS_REQUEST:
            return objectAssing({}, state, {list: action.data, isLoaded:true});
        case actionTypes.COMPLETE_CHAMPION_REQUEST:
            let _list = objectAssing(state.list);
            _list.push(action.champion);
            return objectAssing({}, state, {list: _list});
        case actionTypes.COMPLETE_ALL_CHAMPIONS_BY_YEAR_REQUEST:
            return objectAssing({}, state, {listByYear : action.champions, popupChampionsByYearOpen:true});
        case actionTypes.CLOSE_CHAMPIONS_BY_YEAR_POPUP:
            return objectAssing({}, state, {popupChampionsByYearOpen:false});
        default:
            return state
    }
}