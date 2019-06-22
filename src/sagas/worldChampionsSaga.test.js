import {findMaxPointsInMap} from './worldChampionsSaga';

test('findMaxPoints without parameter', () => {
    expect(findMaxPointsInMap()).toEqual(null);
});

test('findMaxPoints for an empty map', () => {
    let mockData = new Map();
    expect(findMaxPointsInMap(mockData)).toEqual(null);
});

test('findMaxPoints for a map', () => {
    let mockData = new Map();
    mockData.set(0, { points: 3 });
    mockData.set(1, { points: 1 });
    mockData.set(2, { points: 7 });
    mockData.set(3, { points: 2 });
    mockData.set(4, { points: 5 });

    expect(findMaxPointsInMap(mockData)).toEqual({"points": 7});
});

test('findMaxPoints for including negative members map', () => {
    let mockData = new Map();
    mockData.set(0, { points: -3 });
    mockData.set(1, { points: 4 });
    mockData.set(2, { points: 2 });
    mockData.set(3, { points: 9 });
    mockData.set(4, { points: 4 });

    expect(findMaxPointsInMap(mockData)).toEqual({"points": 9});
});