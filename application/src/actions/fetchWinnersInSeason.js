import * as actionTypes from '../constants';

const fetchWinnersInSeason = {
    start: (selectedYear, selectedDriver) => ({
        type: actionTypes.REQUEST_WINNERS_BY_YEAR,
        selectedYear,
        selectedDriver,
        list: [],
        isDialogOpen: true,
    }),
    storeData: (champions, selectedDriverId) => ({
        type: actionTypes.COMPLETE_WINNERS_BY_YEAR_REQUEST,
        champions,
        selectedDriverId,
    }),
};

export default fetchWinnersInSeason;
