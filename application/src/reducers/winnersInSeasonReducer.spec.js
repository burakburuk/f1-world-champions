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
            expect(newState).toEqual(initialState.winnersInSeason);
        });
    });

    describe('when requesting number of champions in a season', () => {
        it('should return updated champion state', () => {
            const action = fetchNumberOfWinnersInSeason.start();
            const newState = winnersInSeasonReducer(undefined, action);
            const expected = { ...initialState.winnersInSeason, numberOfChampionsInSeason: 19 };
            expect(newState).toEqual(expected);
        });
    });

    describe('when completing number of winners in a season requets', () => {
        it('should return updated winners state', () => {
            const action = fetchNumberOfWinnersInSeason.storeData(10);
            const newState = winnersInSeasonReducer(undefined, action);
            const expected = { ...initialState.winnersInSeason, numberOfChampionsInSeason: 10 };
            expect(newState).toEqual(expected);
        });
    });

    describe('when starting all champions by year request', () => {
        it('should return updated champion state', () => {
            const action = fetchWinnersInSeason.start(2005, 2006);
            const newState = winnersInSeasonReducer(undefined, action);
            const expected = { 
                ...initialState.winnersInSeason,
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
                ...initialState.winnersInSeason,
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
                ...initialState.winnersInSeason,
                listByYear: [],
                selectedDriverId: 1
            };
            expect(newState).toEqual(expected);
        });
    });

});