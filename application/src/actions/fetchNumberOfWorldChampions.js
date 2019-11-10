import * as actionTypes from '../constants';

const fetchNumberOfWorldChampions = {
    start: function() {
        return {
            type: actionTypes.REQUEST_NUMBER_OF_WORLD_CHAMPIONS,
            numberOfWorldChampions: 11, // constant 2005-2015
        };
    },
}

export default fetchNumberOfWorldChampions;