import * as images from '../../assets/img';

const carImages = {
    MERCEDES: images.teamCar2,
    RENAULT: images.teamCar1,
    MCLAREN: images.teamCar4,
    FERRARI: images.teamCar3,
    DEFAULT: images.teamCar5,
};

const worldChampionsUtil = {
    getViewModel: (champion) => {
        if (isChampion(champion)) {
            const { winner, season, points } = champion;
            const { Driver, Constructor } = winner;

            const viewModel = {
                driverName: `${Driver.givenName} ${Driver.familyName}`,
                driverId: Driver.driverId,
                nationality: Driver.nationality,
                team: Constructor.name,
                carImage: worldChampionsUtil.getCarImageByTeam(Constructor.name),
            };

            return {
                ...viewModel,
                season,
                points,
                key: season,
            };
        }

        return null;
    },
    getCarImageByTeam: (teamName) => {
        if (teamName && carImages[teamName.toUpperCase()]) {
            return carImages[teamName.toUpperCase()];
        }
        return carImages.DEFAULT;
    },
};

function isChampion(champion) {
    if (!champion || !champion.winner) {
        return false;
    }

    const { Driver, Constructor } = champion.winner;
    return Driver && Constructor;
}

export default worldChampionsUtil;
