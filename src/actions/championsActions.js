import * as actionTypes from "../constants";

export function requestAllChampions(pagination) {
    return {
        type: actionTypes.HANDLE_ALL_CHAMPIONS_REQUEST,
        pagination
    }
}

export function completeAllChampionsRequest(data) {
    return{
        type:actionTypes.COMPLETE_ALL_CHAMPIONS_REQUEST,
        data
    }
}


