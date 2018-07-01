import * as actionTypes from "../constants";

export function requestAllChampions(start, end) {
    return {
        type: actionTypes.HANDLE_ALL_CHAMPIONS_REQUEST,
        start,end
    }
}

export function completeAllChampionsRequest(data) {
    return{
        type:actionTypes.COMPLETE_ALL_CHAMPIONS_REQUEST,
        data
    }
}

export function completeChampionRequest(champion) {
    return{
        type:actionTypes.COMPLETE_CHAMPION_REQUEST,
        champion
    }
}

export function requestAllChampionsByYear(year) {
    return {
        type: actionTypes.HANDLE_ALL_CHAMPIONS_BY_YEAR_REQUEST,
        year
    }
}

export function completeAllChampionByYearRequest(champions) {
    return{
        type:actionTypes.COMPLETE_ALL_CHAMPIONS_BY_YEAR_REQUEST,
        champions
    }
}

export function openChampionsByYearPopup(year) {
    return{
        type:actionTypes.HANDLE_OPEN_CHAMPIONS_BY_YEAR_POPUP,
        year
    }
}

export function closeChampionsByYearPopup() {
    return{
        type:actionTypes.CLOSE_CHAMPIONS_BY_YEAR_POPUP
    }
}





