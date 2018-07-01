import {takeEvery,call,put} from "redux-saga/effects";
import * as actionTypes from "../constants";
import {fetchChampionByYear,fetchAllChampionsByYear} from '../services';
import {completeAllChampionsRequest, completeChampionRequest,
    completeAllChampionByYearRequest} from '../actions';

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

// handles dispatched champions get request and calls related method.
export function* watchAllChampions() {
    yield takeEvery(actionTypes.HANDLE_ALL_CHAMPIONS_REQUEST, requestAllChampions);
}

export function* watchAllChampionsByYear() {
    yield takeEvery(actionTypes.HANDLE_ALL_CHAMPIONS_BY_YEAR_REQUEST, requestAllChampionsByYear);
}

export function* watchOpenChampionsByYearPopup() {
    yield takeEvery(actionTypes.HANDLE_OPEN_CHAMPIONS_BY_YEAR_POPUP, requestAllChampionsByYear);
}


/******************************************************************************/
/******************************* SAGAS ****************************************/
/******************************************************************************/

function* requestAllChampionsByYear (action) {
    try{
        if(action.year){
            const {response, error} = yield call(() => fetchAllChampionsByYear(action.year));
            if(error){
                throw new Error(error);
            }
            if(response.MRData){
                yield put(completeAllChampionByYearRequest(response.MRData.RaceTable.Races));
            }
        }else{
            throw new Error("Start and End parameters must be defined!");
        }
    }catch(error){
        console.warn(error.message);
    }
}

// loads all champions
function* requestAllChampions(action) {
    try{
        let result = [];
        if(action.start && action.end){
            for(let i = action.start; i <= action.end; i++){
                const {response, error} = yield call(() => fetchChampionByYear(i));
                if(error){
                    result.push({error});
                }else{
                    if(response.MRData){
                        const champion = beautifyChampionData(response.MRData.RaceTable.Races[0]);
                        result.push(champion);
                        yield put(completeChampionRequest(champion));
                    }
                }
            }
        }else{
            throw new Error("Start and End parameters must be defined!");
        }

        yield put(completeAllChampionsRequest(result));
    }catch(error){
        console.warn(error.message);
    }
}

function beautifyChampionData(races) {
    races.winner = races.Results[0];
    return races;
}