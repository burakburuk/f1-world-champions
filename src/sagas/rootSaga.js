import { take,takeEvery, put, call, fork, select, all } from 'redux-saga/effects'
import * as actionTypes from '../constants'

// load user unless it is cached
function* requestTestSaga() {

}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

// trigger router navigation via history
function* watchNavigate() {
    yield takeEvery(actionTypes.HANDLE_TEST_SAGA, requestTestSaga);
}

export default function* rootSaga() {
    yield all([
        fork(watchNavigate)
    ])
}