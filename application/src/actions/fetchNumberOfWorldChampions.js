import * as actionTypes from '../constants';

const fetchNumberOfWorldChampions = {
    start: () => ({
        type: actionTypes.REQUEST_NUMBER_OF_WORLD_CHAMPIONS,
        count: 11, // constant 2005-2015
    }),
};

export default fetchNumberOfWorldChampions;
