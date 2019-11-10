import {
    fetchWorldChampions,
    fetchNumberOfWorldChampions,
} from '../actions';
import worldChampionsReducer from './worldChampionsReducer';
import initialState from './initialState';

describe('Given world champions reducer', () => {
    describe('when calling reducer with state and action undefined', () => {
        it('should return initial world champion state', () => {
            const newState = worldChampionsReducer(undefined, undefined);
            expect(newState).toEqual(initialState.worldChampions);
        });
    });

    describe('when requesting all champions in between years', () => {
        it('should return updated world champion state', () => {
            const action = fetchWorldChampions.start(2005, 2006);
            const newState = worldChampionsReducer(undefined, action);
            const expected = {
                ...initialState.worldChampions,
                startYear: 2005,
                endYear: 2006,
            };
            expect(newState).toEqual(expected);
        });
    });

    describe('when requesting number of world champions', () => {
        it('should return updated world champion state', () => {
            const action = fetchNumberOfWorldChampions.start();
            const newState = worldChampionsReducer(undefined, action);
            const expected = {
                ...initialState.worldChampions,
                numberOfWorldChampions: 11,
            };
            expect(newState).toEqual(expected);
        });
    });

    describe('when completing world champions request', () => {
        it('should return updated world champion state', () => {
            const action = fetchWorldChampions.storeData([], 2011);
            const newState = worldChampionsReducer(undefined, action);
            const expected = {
                ...initialState.worldChampions,
                list: new Map().set(2011, []),
            };
            expect(newState).toEqual(expected);
        });
    });

});
