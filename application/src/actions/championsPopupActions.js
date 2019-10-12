import * as actionTypes from '../constants';

export function openChampionsByYearPopup(year, selectedDriverId) {
    return {
        type: actionTypes.HANDLE_OPEN_CHAMPIONS_BY_YEAR_POPUP,
        year,
        selectedDriverId,
    };
}

export function closeChampionsByYearPopup() {
    return {
        type: actionTypes.CLOSE_CHAMPIONS_BY_YEAR_POPUP,
    };
}

export function startAllChampionsRequest(selectedYear, selectedDriver) {
    return {
        type: actionTypes.START_ALL_CHAMPIONS_BY_YEAR_REQUEST,
        selectedYear,
        selectedDriver,
    };
}

export function completeAllChampionByYearRequest(champions, selectedDriverId) {
    return {
        type: actionTypes.COMPLETE_ALL_CHAMPIONS_BY_YEAR_REQUEST,
        champions,
        selectedDriverId,
    };
}
