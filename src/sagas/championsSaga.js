import {takeEvery, call, put} from "redux-saga/effects";
import * as actionTypes from "../constants";
import {fetchChampionByYear, fetchAllChampionsByYear} from '../services';
import {
    completeChampionRequest,
    startAllChampionsRequest,
    completeAllChampionByYearRequest,
    completeNumberOfChampionsInSeason
} from '../actions';

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

// handles dispatched champions get request and calls related method.
export function* watchAllChampions() {
    yield takeEvery(actionTypes.HANDLE_ALL_CHAMPIONS_REQUEST, requestWorldChampionsByDateRange);
}

export function* watchOpenChampionsByYearPopup() {
    yield takeEvery(actionTypes.HANDLE_OPEN_CHAMPIONS_BY_YEAR_POPUP, requestAllChampionsByYear);
}


/******************************************************************************/
/******************************* SAGAS ****************************************/

/******************************************************************************/

function* requestAllChampionsByYear(action) {
    try {
        if (action.year) {
            yield put(startAllChampionsRequest(action.year));
            const {response, error} = yield call(() => fetchAllChampionsByYear(action.year));
            if (error) {
                throw new Error(error);
            }
            if (response.MRData) {
                yield put(completeNumberOfChampionsInSeason(response.MRData.RaceTable.Races.length));
                yield put(completeAllChampionByYearRequest(response.MRData.RaceTable.Races, action.selectedDriverId));
            }
        } else {
            throw new Error("Start and End parameters must be defined!");
        }
    } catch (error) {
        console.warn(error.message);
    }
}

// loads all champions
function* requestWorldChampionsByDateRange(action) {
    try {
        let result = [];
        if (action.start && action.end) {
            for (let i = action.end; i >= action.start; i--) {
                const {response, error} = yield call(() => fetchChampionByYear(i));
                if (error) {
                    result.push({error});
                } else {
                    if (response.MRData) {
                        let champion = findWorldChampionFromList(response.MRData.RaceTable.Races, i);
                        result.push(champion);
                        yield put(completeChampionRequest(champion));
                    }
                }
            }
        } else {
            throw new Error("Start and End parameters must be defined!");
        }

        //yield put(completeAllChampionsRequest(result));
    } catch (error) {
        console.warn(error.message);
    }
}

function findWorldChampionFromList(list, season) {
    let _drivers = new Map();
    for (let i = 0; i < list.length; i++) {
        let _races = list[i].Results;
        for (let j = 0; j < _races.length; j++) {
            let _id = _races[j].Driver.driverId;
            let _point = _races[j].points;
            if (!_drivers.get(_id)) {
                _drivers.set(_id, {
                    points: 0,
                    season: season,
                    winner: _races[j]
                });
            }
            _drivers.get(_id).points += parseInt(_point);
        }
    }
    return findMaxPoints(_drivers);
}

function findMaxPoints(list) {
    let max = 0;
    let keyMax = 0;
    list.forEach(function (value, key) {
        if (max < value.points) {
            max = value.points;
            keyMax = key;
        }
    });
    return list.get(keyMax);
}