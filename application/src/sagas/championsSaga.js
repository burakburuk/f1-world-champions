import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../constants';
import { fetchAllChampionsByYear } from '../services';
import {
    fetchWinnersInYear,
    fetchNumberOfChampionsInSeason,
    notification,
} from '../actions';

export default function* watchOpenChampionsByYearPopup() {
    yield takeLatest(actionTypes.HANDLE_OPEN_CHAMPIONS_BY_YEAR_POPUP, requestAllChampionsByYear);
}

function* requestAllChampionsByYear(action) {
    try {
        if (action.year) {
            yield put(fetchWinnersInYear.start(action.year));
            const { response, error } = yield call(() => fetchAllChampionsByYear(action.year));
            if (error) {
                throw new Error(error);
            }
            if (response.MRData) {
                yield put(fetchNumberOfChampionsInSeason.storeData(response.MRData.RaceTable.Races.length));
                yield put(fetchWinnersInYear.storeData(response.MRData.RaceTable.Races, action.selectedDriverId));
            }
        } else {
            throw new Error('Start and End parameters must be defined!');
        }
    } catch (error) {
        yield put(notification.show({ title: 'Server Error', message: error.message }));
    }
}
