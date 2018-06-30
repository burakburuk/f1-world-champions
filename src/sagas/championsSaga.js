import {takeEvery,call,put} from "redux-saga/effects";
import * as actionTypes from "../constants";
import {fetchAllChampions} from '../services';
import {completeAllChampionsRequest} from '../actions';

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

// handles dispatched champions get request and calls related method.
export function* watchAllChampions() {
    yield takeEvery(actionTypes.HANDLE_ALL_CHAMPIONS_REQUEST, requestAllChampions);
}

/******************************************************************************/
/******************************* SAGAS ****************************************/
/******************************************************************************/

// loads all champions
function* requestAllChampions(action) {
    try{
        debugger;
        const {response, error} = yield call(() => fetchAllChampions(action.pagination));
        if(error){
            throw new Error(error);
        }
        yield put(completeAllChampionsRequest(response));
        return response;
    }catch(error){
        console.warn(error.message);
    }
}