import {
    takeLatest,
    call,
    put,
    fork,
    take,
} from 'redux-saga/effects';
import * as actionTypes from '../constants';
import { fetchChampionByYear } from '../services';
import {
    fetchWorldChampions,
    manageNotification,
} from '../actions';

// handles dispatched champions get request and calls related method.
export function* watchAllChampions() {
    yield takeLatest(actionTypes.REQUEST_WORLD_CHAMPIONS, requestWorldChampionsByDateRange);
}

export function* fetchChamp(year) {
    try {
        const { response, error } = yield call(() => fetchChampionByYear(year));
        if (error) {
            throw new Error(`Error while fetching Champ ${error}`);
        } else if (response.MRData) {
            const champion = findWorldChampionFromList(response.MRData.RaceTable.Races, year);
            yield put(fetchWorldChampions.storeData(champion, year));
        } else {
            throw new Error('response.MRData is not defined!!');
        }
    } catch (error) {
        yield put(manageNotification.show({ title: 'Server Error', message: error.message }));
    }
}

// loads all champions
export function* requestWorldChampionsByDateRange(action) {
    try {
        const tasks = [];
        if (action.startYear && action.endYear) {
            for (let i = action.endYear; i >= action.startYear; i--) {
                tasks[i] = yield fork(fetchChamp, i);
            }
        } else {
            throw new Error('Start and End parameters must be defined!');
        }
        yield take(actionTypes.COMPLETE_ALL_CHAMPIONS_REQUEST);
    } catch (error) {
        yield put(notification.show({ title: 'Server Error', message: error.message }));
    }
}

export function findWorldChampionFromList(list, season) {
    const drivers = new Map();
    for (let i = 0; i < list.length; i++) {
        const races = list[i].Results;
        for (let j = 0; j < races.length; j++) {
            const id = races[j].Driver.driverId;
            const point = races[j].points;
            if (!drivers.get(id)) {
                drivers.set(id, {
                    points: 0,
                    season,
                    winner: races[j],
                });
            }
            drivers.get(id).points += parseInt(point, 10);
        }
    }
    return findMaxPointsInMap(drivers);
}

export function findMaxPointsInMap(list = new Map()) {
    if (!list) { return null; }
    if (list.size === 0) { return null; }

    let max = 0;
    let keyMax = 0;
    list.forEach((value, key) => {
        if (max < value.points) {
            max = value.points;
            keyMax = key;
        }
    });
    return list.get(keyMax);
}
