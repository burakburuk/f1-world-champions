const winnersInSeasonSelector = {
    selectedYear: state => state.winnersInSeason.selectedYear,
    selectedDriverId: state => state.winnersInSeason.selectedDriverId,
    list: state => state.winnersInSeason.list,
    count: state => state.winnersInSeason.count,
    popupChampionsByYearOpen: state => state.winnersInSeason.isDialogOpen,
};

export default winnersInSeasonSelector;
