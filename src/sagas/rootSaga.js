import { fork, all } from 'redux-saga/effects'
import {watchAllChampions, watchOpenChampionsByYearPopup} from './championsSaga';

// initialize all the watchers parallel
export default function* rootSaga() {
    yield all([
        fork(watchAllChampions),
        fork(watchOpenChampionsByYearPopup),
    ])
}