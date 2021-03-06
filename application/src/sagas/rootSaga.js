import { fork, all } from 'redux-saga/effects';
import watchOpenChampionsByYearPopup from './winnersInSeasonSaga';
import { watchAllChampions } from './worldChampionsSaga';

// initialize all the watchers parallel
export default function* rootSaga() {
    yield all([
        fork(watchAllChampions),
        fork(watchOpenChampionsByYearPopup),
    ]);
}
