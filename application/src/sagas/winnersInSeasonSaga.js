import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../constants';
import { fetchAllChampionsByYear } from '../services';
import {
    fetchWinnersInSeason,
    fetchNumberOfWinnersInSeason,
    manageNotification,
} from '../actions';

export default function* watchOpenChampionsByYearPopup() {
    yield takeLatest(actionTypes.OPEN_WINNERS_BY_YEAR_POPUP, requestAllChampionsByYear);
}

export function* requestAllChampionsByYear(action) {
    try {
        if (action.year) {
            yield put(fetchWinnersInSeason.start(action.year));
            const { response, error } = yield call(fetchAllChampionsByYear, action.year);
            if (error) {
                throw new Error(error);
            }
            if (response.MRData) {
                yield put(fetchNumberOfWinnersInSeason.storeData(response.MRData.RaceTable.Races.length));
                yield put(fetchWinnersInSeason.storeData(response.MRData.RaceTable.Races, action.selectedDriverId));
            }
        } else {
            throw new Error('Start and End parameters must be defined!');
        }
    } catch (error) {
        yield put(manageNotification.show({ title: 'Server Error', message: error.message }));
    }
}
