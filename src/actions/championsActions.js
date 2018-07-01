import * as actionTypes from "../constants";

export function requestNumberOfWorldChampions() {
    return {
        type: actionTypes.REQUEST_NUMBER_OF_WORLD_CHAMPIONS,
        numberOfWorldChampions: 11 // constant 2005-2015
    }
}

export function requestNumberOfChampionsInSeason() {
    return {
        type: actionTypes.REQUEST_NUMBER_OF_CHAMPIONS_IN_SEASON,
        numberOfChampionsInSeason: 19 // initial data
    }
}

export function completeNumberOfChampionsInSeason(numberOfChampionsInSeason) {
    return {
        type: actionTypes.COMPLETE_NUMBER_OF_CHAMPIONS_IN_SEASON,
        numberOfChampionsInSeason
    }
}

export function requestAllChampions(start, end) {
    return {
        type: actionTypes.HANDLE_ALL_CHAMPIONS_REQUEST,
        start, end
    }
}

export function completeAllChampionsRequest(data) {
    return {
        type: actionTypes.COMPLETE_ALL_CHAMPIONS_REQUEST,
        data
    }
}

export function startAllChampionsRequest(selectedYear, selectedDriver) {
    return {
        type: actionTypes.START_ALL_CHAMPIONS_BY_YEAR_REQUEST,
        selectedYear, selectedDriver
    }
}

export function completeChampionRequest(champion) {
    return {
        type: actionTypes.COMPLETE_CHAMPION_REQUEST,
        champion
    }
}

export function completeAllChampionByYearRequest(champions, selectedDriverId) {
    return {
        type: actionTypes.COMPLETE_ALL_CHAMPIONS_BY_YEAR_REQUEST,
        champions, selectedDriverId
    }
}

export function openChampionsByYearPopup(year, selectedDriverId) {
    return {
        type: actionTypes.HANDLE_OPEN_CHAMPIONS_BY_YEAR_POPUP,
        year, selectedDriverId
    }
}

export function closeChampionsByYearPopup() {
    return {
        type: actionTypes.CLOSE_CHAMPIONS_BY_YEAR_POPUP
    }
}
