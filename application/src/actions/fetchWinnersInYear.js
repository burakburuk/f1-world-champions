import * as actionTypes from '../constants';

const fetchWinnersInYear = {
    start: function(selectedYear, selectedDriver) {
        return {
            type: actionTypes.START_ALL_CHAMPIONS_BY_YEAR_REQUEST,
            selectedYear,
            selectedDriver,
            listByYear: [],
            popupChampionsByYearOpen: true,
        };
    },
    storeData: function(champions, selectedDriverId) {
        return {
            type: actionTypes.COMPLETE_ALL_CHAMPIONS_BY_YEAR_REQUEST,
            champions,
            selectedDriverId,
        };
    }
}

export default fetchWinnersInYear;
