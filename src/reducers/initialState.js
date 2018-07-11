const initialState = {
    champions: {
        popupChampionsByYearOpen: false,
        numberOfChampionsInSeason: 0,
        isLoaded: false,
        selectedYear: 0,
        selectedDriverId: null,
        listByYear: []
    },
    worldChampions: {
        list: new Map(),
        numberOfWorldChampions: 0,
        startYear: 1,
        endYear: 0,
    }
};

export default initialState;
