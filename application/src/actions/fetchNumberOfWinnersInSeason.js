import * as actionTypes from '../constants';

const fetchNumberOfWinnersInSeason = {
    start: () => ({
        type: actionTypes.REQUEST_NUMBER_OF_WINNERS_IN_SEASON,
        count: 19, // initial data
    }),
    storeData: count => ({
        type: actionTypes.COMPLETE_NUMBER_OF_WINNERS_IN_SEASON_REQUEST,
        count,
    }),
};

export default fetchNumberOfWinnersInSeason;
