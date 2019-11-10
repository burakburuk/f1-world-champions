import worldChampionsUtil from './worldChampionsUtil';

describe('Given world champions util', () => {
    describe('when getting view model', () => {
        describe('without paramaters', () => {
            it('should return null', () => {
                const result = worldChampionsUtil.getViewModel();
                expect(result).toBe(null);
            });
        });
        describe('with empty object', () => {
            it('should return null', () => {
                const result = worldChampionsUtil.getViewModel({});
                expect(result).toBeNull();
            });
        });
        describe('with empty winner object', () => {
            it('should return null', () => {
                const result = worldChampionsUtil.getViewModel({ winner: {} });
                expect(result).toBeNull();
            });
        });
        describe('with winner object including empty Driver', () => {
            it('should return null', () => {
                const data = {
                    winner: {
                        Driver: {},
                    },
                };
                const result = worldChampionsUtil.getViewModel(data);
                expect(result).toBeNull();
            });
        });
        describe('with winner object including empty Constructor', () => {
            it('should return null', () => {
                const data = {
                    winner: {
                        Constructor: {},
                    },
                };
                const result = worldChampionsUtil.getViewModel(data);
                expect(result).toBeNull();
            });
        });
        describe('with winner object including empty Driver and Constructor', () => {
            it('should return null', () => {
                const data = {
                    winner: {
                        Driver: {},
                        Constructor: {},
                    },
                };
                const expected = {
                    carImage: '',
                    driverId: undefined,
                    driverName: 'undefined undefined',
                    key: undefined,
                    nationality: undefined,
                    points: undefined,
                    season: undefined,
                    team: undefined,
                };
                const result = worldChampionsUtil.getViewModel(data);
                expect(result).toEqual(expected);
            });
        });
        describe('with valid data', () => {
            it('should return a champion', () => {
                const champion = {
                    points: 392,
                    season: 2011,
                    winner: {
                        number: 1,
                        position: 1,
                        positionText: 1,
                        points: 25,
                        Driver: {
                            driverId: 'vettel',
                            permanentNumber: 5,
                            code: 'VET',
                            url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                            givenName: 'Sebastian',
                            familyName: 'Vettel',
                            dateOfBirth: '1987-07-03',
                            nationality: 'German',
                        },
                        Constructor: {
                            constructorId: 'red_bull',
                            url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                            name: 'Red Bull',
                            nationality: 'Austrian',
                        },
                        grid: 1,
                        laps: 58,
                        status: 'Finished',
                        Time: {
                            millis: 5370259,
                            time: '1:29:30.259',
                        },
                        FastestLap: {
                            rank: 4,
                            lap: 44,
                            Time: {
                                time: '1:29.844',
                            },
                            AverageSpeed: {
                                units: 'kph',
                                speed: '212.488',
                            },
                        },
                    },
                };
                const expected = {
                    carImage: '',
                    driverId: 'vettel',
                    driverName: 'Sebastian Vettel',
                    key: 2011,
                    nationality: 'German',
                    points: 392,
                    season: 2011,
                    team: 'Red Bull',
                };
                const result = worldChampionsUtil.getViewModel(champion);
                expect(result).toEqual(expected);
            });
        });
    });
});
