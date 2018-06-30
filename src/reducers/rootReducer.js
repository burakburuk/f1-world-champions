import { combineReducers } from 'redux';
import testSagaReducer from './testSagaReducer';

const rootReducer = combineReducers({
    testSaga: testSagaReducer
});

export default rootReducer;