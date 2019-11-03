import * as actionTypes from '../constants';

const fetchNumberOfWinnersInSeason = {
    start: function() {
        return {
            type: actionTypes.REQUEST_NUMBER_OF_CHAMPIONS_IN_SEASON,
            numberOfChampionsInSeason: 19, // initial data
        };
    }
}

export default fetchNumberOfWinnersInSeason;