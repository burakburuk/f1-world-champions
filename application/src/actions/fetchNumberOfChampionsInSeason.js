import * as actionTypes from '../constants';

const fetchNumberOfChampionsInSeason = {
    start: function() {
        return {
            type: actionTypes.REQUEST_NUMBER_OF_WORLD_CHAMPIONS,
            numberOfWorldChampions: 11, // constant 2005-2015
        };
    },
    storeData: function(numberOfChampionsInSeason) {
        return {
            type: actionTypes.COMPLETE_NUMBER_OF_CHAMPIONS_IN_SEASON,
            numberOfChampionsInSeason,
        };
    }
}

export default fetchNumberOfChampionsInSeason;