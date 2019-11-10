import * as actionTypes from '../constants';

const fetchWorldChampions = {
    start: (startYear, endYear) => ({
        type: actionTypes.REQUEST_WORLD_CHAMPIONS,
        startYear,
        endYear,
    }),
    storeData: (champion, year) => ({
        type: actionTypes.COMPLETE_WORLD_CHAMPIONS_REQUEST,
        champion,
        year,
    }),
};

export default fetchWorldChampions;
