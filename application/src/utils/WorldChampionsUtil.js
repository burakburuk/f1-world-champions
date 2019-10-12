import * as images from '../assets/img';

const carImages = {
    MERCEDES: images.teamCar2,
    RENAULT: images.teamCar1,
    MCLAREN: images.teamCar4,
    FERRARI: images.teamCar3,
    DEFAULT: images.teamCar5,
};

export default class WorldChampionsUtil {
    static getChampionViewModel(champion) {
        const viewModel = {};

        if (champion !== null) {
            const { winner, season, points } = champion;

            if (winner) {
                const { Driver, Constructor } = winner;
                if (Driver) {
                    if (Driver.givenName) {
                        viewModel.driverName = `${Driver.givenName} ${Driver.familyName}`;
                    }
                    if (winner.Driver.driverId) {
                        viewModel.driverId = Driver.driverId;
                    }
                    if (winner.Driver.nationality) {
                        viewModel.nationality = Driver.nationality;
                    }
                }
                if (Constructor) {
                    viewModel.team = Constructor.name;
                    if (viewModel.team) {
                        viewModel.carImage = WorldChampionsUtil.getCarImageByTeam(viewModel.team);
                    }
                }
            }
            return {
                ...viewModel,
                winner,
                season,
                points,
                key: season,
            };
        }

        return null;
    }

    static getCarImageByTeam = (teamName) => {
        if (teamName && carImages[teamName.toUpperCase()]) {
            return carImages[teamName.toUpperCase()];
        }
        return carImages.DEFAULT;
    }
}
