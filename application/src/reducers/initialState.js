const initialState = {
    notification: {
        title: '',
        message: '',
        open: false,
    },
    champions: {
        popupChampionsByYearOpen: false,
        numberOfChampionsInSeason: 0,
        selectedYear: 0,
        selectedDriverId: null,
        listByYear: [],
    },
    worldChampions: {
        list: new Map(),
        numberOfWorldChampions: 0,
        startYear: 1,
        endYear: 0,
    },
};

export default initialState;
