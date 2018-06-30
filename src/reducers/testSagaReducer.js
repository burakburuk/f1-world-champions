import * as actionTypes from '../constants';
import objectAssing from 'object-assign';

export default function testSagaReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.HANDLE_TEST_SAGA:
            return state;
        default:
            return state
    }
}