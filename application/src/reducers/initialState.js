const initialState = {
    notification: {
        title: '',
        message: '',
        open: false,
    },
    winnersInSeason: {
        isDialogOpen: false,
        count: 0,
        selectedYear: 0,
        selectedDriverId: null,
        list: [],
    },
    worldChampions: {
        count: 0,
        startYear: 1,
        endYear: 0,
        list: new Map(),
    },
};

export default initialState;
