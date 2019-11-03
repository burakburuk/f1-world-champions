const worldChampionsSelector = {
    all: function(state) {
        return state.worldChampions;
    },
    list: function(state) {
        return state.worldChampions.list;
    },
    numberOfWorldChampions: function(state) {
        return state.worldChampions.numberOfWorldChampions;
    },
    startYear: function(state) {
        return state.worldChampions.startYear;
    },
    endYear: function(state) {
        return state.worldChampions.endYear;
    },
};

export default worldChampionsSelector;
