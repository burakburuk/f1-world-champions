import { call, put } from 'redux-saga/effects';
import { requestAllChampionsByYear } from './winnersInSeasonSaga';
import winnersInSeasonPopup from '../actions/winnersInSeasonPopup';
import { fetchAllChampionsByYear } from '../services';

import {
    fetchWinnersInSeason,
    fetchNumberOfWinnersInSeason,
    manageNotification,
} from '../actions';

describe('Given winnersInSeasonSaga', () => {

    describe('when saga called without payload', () => {
        const action = winnersInSeasonPopup.open();
        const saga = requestAllChampionsByYear(action);

        it('should dispatch notification action with error', () => {
            const notification = { title: 'Server Error', message: 'Start and End parameters must be defined!' };
            const actual = saga.next().value;
            const expected = put(manageNotification.show(notification));
            expect(actual).toEqual(expected);
        });
        it('should finish saga', () => {
            const actual = saga.next();
            const expected = { done: true };
            expect(actual).toEqual(expected);
        });

    });

    describe('when saga called with payload', () => {
        const year = 2010;
        const selectedDriverId = '123';
        const action = winnersInSeasonPopup.open(year, selectedDriverId);

        describe('and service returned error', () => {
            const saga = requestAllChampionsByYear(action);

            it('should dispatch fetchWinnersInSeason action', () => {
                const actual = saga.next().value;
                const expected = put(fetchWinnersInSeason.start(action.year));
                expect(actual).toEqual(expected);
            });
            it('should call fetchAllChampionsByYear service', () => {
                const actual = saga.next().value;
                const expected = call(fetchAllChampionsByYear, action.year);
                expect(actual).toEqual(expected);
            });
            it('should dispatch notification action with error', () => {
                const notification = { title: 'Server Error', message: 'error' };
                const actual = saga.next({ error: 'error' }).value;
                const expected = put(manageNotification.show(notification));
                expect(actual).toEqual(expected);
            });
            it('should finish saga', () => {
                const actual = saga.next();
                const expected = { done: true };
                expect(actual).toEqual(expected);
            });
        });

        describe('and service returned response', () => {
            const response = {
                MRData: {
                    RaceTable: {
                        Races: [],
                    },
                },
            };
            const saga = requestAllChampionsByYear(action);
            
            it('should dispatch fetchWinnersInSeason action', () => {
                const actual = saga.next().value;
                const expected = put(fetchWinnersInSeason.start(action.year));
                expect(actual).toEqual(expected);
            });
            it('should call fetchAllChampionsByYear service', () => {
                const actual = saga.next().value;
                const expected = call(fetchAllChampionsByYear, action.year);
                expect(actual).toEqual(expected);
            });
            it('should dispatch fetchNumberOfWinnersInSeason action with race count', () => {
                const actual = saga.next({ response }).value;
                const expected = put(fetchNumberOfWinnersInSeason.storeData(response.MRData.RaceTable.Races.length));
                expect(actual).toEqual(expected);
            });
            it('should dispatch fetchWinnersInSeason action with race list and selected driver', () => {
                const actual = saga.next({ response }).value;
                const expected = put(fetchWinnersInSeason.storeData(response.MRData.RaceTable.Races, action.selectedDriverId));
                expect(actual).toEqual(expected);
            });
            it('should finish saga', () => {
                const actual = saga.next();
                const expected = { done: true };
                expect(actual).toEqual(expected);
            });
        });

    })

});
