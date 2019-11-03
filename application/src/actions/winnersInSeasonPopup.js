import * as actionTypes from '../constants';

const winnersInSeasonPopup = {
    open: function(year, selectedDriverId) {
        return {
            type: actionTypes.HANDLE_OPEN_CHAMPIONS_BY_YEAR_POPUP,
            year,
            selectedDriverId,
        };
    },
    close: function() {
        return {
            type: actionTypes.CLOSE_CHAMPIONS_BY_YEAR_POPUP,
            popupChampionsByYearOpen: false,
        };
    }
}

export default winnersInSeasonPopup;
