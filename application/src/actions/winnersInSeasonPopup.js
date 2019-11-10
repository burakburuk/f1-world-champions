import * as actionTypes from '../constants';

const winnersInSeasonPopup = {
    open: (year, selectedDriverId) => ({
        type: actionTypes.OPEN_WINNERS_BY_YEAR_POPUP,
        year,
        selectedDriverId,
    }),
    close: () => ({
        type: actionTypes.CLOSE_WINNERS_BY_YEAR_POPUP,
        isDialogOpen: false,
    }),
};

export default winnersInSeasonPopup;
