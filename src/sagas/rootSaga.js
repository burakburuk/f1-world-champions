import { fork, all } from 'redux-saga/effects'
import {watchAllChampions} from './championsSaga';

// initialize all the watchers parallel
export default function* rootSaga() {
    yield all([
        fork(watchAllChampions)
    ])
}