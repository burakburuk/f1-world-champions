const worldChampionsSelector = {
    all: state => state.worldChampions,
    list: state => state.worldChampions.list,
    count: state => state.worldChampions.count,
    startYear: state => state.worldChampions.startYear,
    endYear: state => state.worldChampions.endYear,
};

export default worldChampionsSelector;
