import * as actionTypes from '../constants';

const fetchWorldChampions = {
    start: function(startYear, endYear) {
        return {
            type: actionTypes.REQUEST_WORLD_CHAMPIONS,
            startYear,
            endYear,
        };
    },
    storeData: function(champion, year) {
        return {
            type: actionTypes.COMPLETE_WORLD_CHAMPIONS_REQUEST,
            champion,
            year,
        };
    }
}

export default fetchWorldChampions;