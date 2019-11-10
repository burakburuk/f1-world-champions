const winnersInSeasonUtil = {
    getViewModel: (champion, selectedDriverId) => {
        if (isChampion(champion)) {
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
    },
};

function isChampion(champion) {
    if (!champion) {
        return false;
    }

    const resultHasItem = champion.Results && champion.Results.length && champion.Results.length > 0;
    if (!resultHasItem) {
        return false;
    }

    const resultHasDriverInFirstElement = champion.Results[0].Driver;
    const resultHasConstructorInFirstElement = champion.Results[0].Constructor;

    return resultHasDriverInFirstElement && resultHasConstructorInFirstElement;
}

export default winnersInSeasonUtil;
