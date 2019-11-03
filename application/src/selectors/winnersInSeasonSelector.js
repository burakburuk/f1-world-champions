const winnersInSeasonSelector = {
    selectedYear: function(state) {
        return state.winnersInSeason.selectedYear;
    },
    selectedDriverId: function(state) {
        return state.winnersInSeason.selectedDriverId;
    },
    listByYear: function(state) {
        return state.winnersInSeason.listByYear;
    },
    numberOfChampionsInSeason: function(state) {
        return state.winnersInSeason.numberOfChampionsInSeason;
    },
    popupChampionsByYearOpen: function(state) {
        return state.winnersInSeason.popupChampionsByYearOpen;
    }
}

export default winnersInSeasonSelector;