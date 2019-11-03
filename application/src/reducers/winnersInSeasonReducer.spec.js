import {
    fetchNumberOfWinnersInSeason,
    fetchNumberOfWorldChampions,
    fetchWinnersInSeason,
    winnersInSeasonPopup,
} from '../actions';
import winnersInSeasonReducer from './winnersInSeasonReducer';
import initialState from './initialState';

describe('Given winners in season reducer', () => {
    describe('when calling reducer with state and action undefined', () => {
        it('should return initial champion state', () => {
            const newState = winnersInSeasonReducer(undefined, undefined);
            expect(newState).toEqual(initialState.champions);
        });
    });

    describe('when requesting number of champions in a season', () => {
        it('should return updated champion state', () => {
            const action = fetchNumberOfWinnersInSeason.start();
            const newState = winnersInSeasonReducer(undefined, action);
            const expected = { ...initialState.champions, numberOfChampionsInSeason: 19 };
            expect(newState).toEqual(expected);
        });
    });

    describe('when completing number of champions in a season requets', () => {
        it('should return updated champion state', () => {
            const action = fetchNumberOfWorldChampions.storeData(10);
            const newState = winnersInSeasonReducer(undefined, action);
            const expected = { ...initialState.champions, numberOfChampionsInSeason: 10 };
            expect(newState).toEqual(expected);
        });
    });

    describe('when starting all champions by year request', () => {
        it('should return updated champion state', () => {
            const action = fetchWinnersInSeason.start(2005, 2006);
            const newState = winnersInSeasonReducer(undefined, action);
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
            const action = winnersInSeasonPopup.close();
            const newState = winnersInSeasonReducer(undefined, action);
            const expected = {
                ...initialState.champions,
                popupChampionsByYearOpen: false,
            };
            expect(newState).toEqual(expected);
        });
    });

    describe('when completing all champions by year request', () => {
        it('should return updated champion state', () => {
            const action = fetchWinnersInSeason.storeData([], 1);
            const newState = winnersInSeasonReducer(undefined, action);
            const expected = {
                ...initialState.champions,
                listByYear: [],
                selectedDriverId: 1
            };
            expect(newState).toEqual(expected);
        });
    });

});