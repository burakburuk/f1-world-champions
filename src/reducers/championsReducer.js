import * as actionTypes from '../constants';
import objectAssing from 'object-assign';

export default function championsReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.HANDLE_ALL_CHAMPIONS_REQUEST:
            return state;
        case actionTypes.COMPLETE_ALL_CHAMPIONS_REQUEST:
            console.log(action.data);
            return state;
        default:
            return state
    }
}