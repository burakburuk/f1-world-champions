import * as actionTypes from '../constants';

const fetchWorldChampions = {
    start: function(startYear, endYear) {
        return {
            type: actionTypes.HANDLE_ALL_CHAMPIONS_REQUEST,
            startYear,
            endYear,
        };
    },
    storeData: function(champion, year) {
        return {
            type: actionTypes.FETCH_CHAMPION_BY_YEAR_COMPLETE,
            champion,
            year,
        };
    }
}

export default fetchWorldChampions;