import {
    requestNumberOfChampionsInSeason,
    fetchNumberOfChampionsInSeason,
    fetchWinnersInYear,
    winnersInYearPopup,
} from '../actions';
import championsReducer from './championsReducer';
import initialState from './initialState';

describe('Given championsReducer', () => {
    describe('when calling reducer with state and action undefined', () => {
        it('should return initial champion state', () => {
            const newState = championsReducer(undefined, undefined);
            expect(newState).toEqual(initialState.champions);
        });
    });

    describe('when requesting number of champions in a season', () => {
        it('should return updated champion state', () => {
            const action = requestNumberOfChampionsInSeason();
            const newState = championsReducer(undefined, action);
            const expected = { ...initialState.champions, numberOfChampionsInSeason: 19 };
            expect(newState).toEqual(expected);
        });
    });

    describe('when completing number of champions in a season requets', () => {
        it('should return updated champion state', () => {
            const action = fetchNumberOfChampionsInSeason.storeData(10);
            const newState = championsReducer(undefined, action);
            const expected = { ...initialState.champions, numberOfChampionsInSeason: 10 };
            expect(newState).toEqual(expected);
        });
    });

    describe('when starting all champions by year request', () => {
        it('should return updated champion state', () => {
            const action = fetchWinnersInYear.start(2005, 2006);
            const newState = championsReducer(undefined, action);
            const expected = { 
                ...initialState.champions,
                selectedYear: action.selectedYear,
                listByYear: [],
                popupChampionsByYearOpen: true,
            };
            expect(newState).toEqual(expected);
        });
    });
    
    describe('when closing champions by year popup all champions by year request', () => {
        it('should return updated champion state', () => {
            const action = winnersInYearPopup.close();
            const newState = championsReducer(undefined, action);
            const expected = {
                ...initialState.champions,
                popupChampionsByYearOpen: false,
            };
            expect(newState).toEqual(expected);
        });
    });

    describe('when completing all champions by year request', () => {
        it('should return updated champion state', () => {
            const action = fetchWinnersInYear.storeData([], 1);
            const newState = championsReducer(undefined, action);
            const expected = {
                ...initialState.champions,
                listByYear: [],
                selectedDriverId: 1
            };
            expect(newState).toEqual(expected);
        });
    });

});