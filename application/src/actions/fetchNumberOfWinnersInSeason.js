import * as actionTypes from '../constants';

const fetchNumberOfWinnersInSeason = {
    start: function() {
        return {
            type: actionTypes.REQUEST_NUMBER_OF_WINNERS_IN_SEASON,
            numberOfChampionsInSeason: 19, // initial data
        };
    },
    storeData: function(numberOfChampionsInSeason) {
        return {
            type: actionTypes.COMPLETE_NUMBER_OF_WINNERS_IN_SEASON_REQUEST,
            numberOfChampionsInSeason,
        };
    }
}

export default fetchNumberOfWinnersInSeason;