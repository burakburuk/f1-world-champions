export default class ChampionsByYearUtil {
    static getChampionViewModel(champion, selectedDriverId) {
        if (champion) {
            const winner = champion.Results[0];
            const { driverId } = winner.Driver;
            const driverName = `${winner.Driver.givenName} ${winner.Driver.familyName}`;
            const team = winner.Constructor.name;
            const { season } = champion;
            const { date } = champion;
            const { raceName } = champion;
            const key = `${driverName}-${date}`;

            return {
                key,
                name: driverName,
                year: season,
                date,
                company: team,
                highlight: selectedDriverId === driverId,
                race: raceName,
            };
        }

        return null;
    }
}
