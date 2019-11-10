import * as actionTypes from '../constants';

const fetchWinnersInSeason = {
    start: function(selectedYear, selectedDriver) {
        return {
            type: actionTypes.REQUEST_WINNERS_BY_YEAR,
            selectedYear,
            selectedDriver,
            listByYear: [],
            popupChampionsByYearOpen: true,
        };
    },
    storeData: function(champions, selectedDriverId) {
        return {
            type: actionTypes.COMPLETE_WINNERS_BY_YEAR_REQUEST,
            champions,
            selectedDriverId,
        };
    }
}

export default fetchWinnersInSeason;
