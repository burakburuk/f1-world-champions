import {findWorldChampionFromList, findMaxPoints,requestWorldChampionsByDateRange,fetchChamp} from './worldChampionsSaga';


test('findMaxPoints for a list', () => {
    expect(findMaxPoints([1,3,2,5,4])).toEqual(5);
    expect(findMaxPoints([-5,5,5,2,5])).toEqual(5);
});