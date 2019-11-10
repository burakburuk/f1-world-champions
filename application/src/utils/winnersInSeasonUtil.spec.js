import winnersInSeasonUtil from './winnersInSeasonUtil';

const champion = {
    season: 2013,
    raceName: 'Australian Grand Prix',
    date: '2013-03-17',
    Results: [
        {
            number: '7',
            position: '1',
            positionText: '1',
            points: '25',
            Driver: {
                driverId: 'raikkonen',
                permanentNumber: '7',
                code: 'RAI',
                url: 'http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen',
                givenName: 'Kimi',
                familyName: 'Räikkönen',
                dateOfBirth: '1979-10-17',
                nationality: 'Finnish',
            },
            Constructor: {
                constructorId: 'lotus_f1',
                url: 'http://en.wikipedia.org/wiki/Lotus_F1',
                name: 'Lotus F1',
                nationality: 'British',
            },
            grid: '7',
            laps: '58',
            status: 'Finished',
            Time: {
                millis: '5403225',
                time: '1:30:03.225',
            },
            FastestLap: {
                rank: '1',
                lap: '56',
                Time: {
                    time: '1:29.274',
                },
                AverageSpeed: {
                    units: 'kph',
                    speed: '213.845',
                },
            },
        },
    ],
};

const championObj = {
    company: 'Lotus F1',
    date: '2013-03-17',
    highlight: false,
    key: 'Kimi Räikkönen-2013-03-17',
    name: 'Kimi Räikkönen',
    race: 'Australian Grand Prix',
    year: 2013,
};

describe('Given winners in season utils', () => {
    describe('when getting champion view model', () => {
        describe('without paramaters', () => {
            it('should return null', () => {
                const result = winnersInSeasonUtil.getViewModel();
                expect(result).toBeNull();
            });
        });
        describe('with empty object', () => {
            it('should return null', () => {
                const result = winnersInSeasonUtil.getViewModel({});
                expect(result).toBeNull();
            });
        });
        describe('with empty Results object', () => {
            it('should return null', () => {
                const result = winnersInSeasonUtil.getViewModel({ Results: {} });
                expect(result).toBeNull();
            });
        });
        describe('with Results object length 0 array', () => {
            it('should return null', () => {
                const result = winnersInSeasonUtil.getViewModel({ Results: [] });
                expect(result).toBeNull();
            });
        });
        describe('with empty driver data', () => {
            it('should return null', () => {
                const Driver = {};
                const Results = [Driver];
                const result = winnersInSeasonUtil.getViewModel({ Results });
                expect(result).toBeNull();
            });
        });
        describe('with empty constructor data', () => {
            it('should return null', () => {
                const Constructor = {};
                const Results = [Constructor];
                const result = winnersInSeasonUtil.getViewModel({ Results });
                expect(result).toBeNull();
            });
        });
        describe('with valid data', () => {
            it('should return a champion', () => {
                const result = winnersInSeasonUtil.getViewModel(champion);
                expect(result).toEqual(championObj);
            });
        });
        describe('with valid data and selected driver id as different', () => {
            it('should return a champion by not highlighting', () => {
                const result = winnersInSeasonUtil.getViewModel(champion, 123);
                expect(result.highlight).toBe(false);
            });
        });
        describe('with valid data and selected driver id as the same', () => {
            it('should return a champion by highlighting', () => {
                const winner = champion.Results[0];
                const { driverId } = winner.Driver;
                const result = winnersInSeasonUtil.getViewModel(champion, driverId);
                expect(result.highlight).toBe(true);
            });
        });
    });
});
