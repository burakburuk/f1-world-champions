import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import objectAssing from 'object-assign';
import {
    requestAllChampions,
    requestNumberOfWorldChampions,
    openChampionsByYearPopup,
} from '../../actions';
import ChampionItem from '../presentational/ChampionItem';
import componentStyles from './ChampionListStyles';
import * as images from '../../assets/img';

const carImages = {
    MERCEDES: images.teamCar2,
    RENAULT: images.teamCar1,
    MCLAREN: images.teamCar4,
    FERRARI: images.teamCar3,
    DEFAULT: images.teamCar5,
};

class ChampionList extends Component {
    componentDidMount() {
        this.props.requestNumberOfChampions();
        this.props.requestAllChampions(2005, 2015);
    }

    render() {
        const { champions } = this.props;
        const championListByYear = this.createChampionListByYears(champions);
        const allChampions = this.getChampionListFromMap(championListByYear);

        return (
            <React.Fragment>
                {allChampions}
            </React.Fragment>
        );
    }

    createChampionListByYears = (champions) => {
        const championList = objectAssing(champions.list);
        for (let i = champions.endYear; i >= champions.startYear; i--) {
            if (championList.get(i) === undefined) {
                championList.set(i, null);
            }
        }
        return championList;
    };

    getChampionListFromMap = (championsMap) => {
        const championList = [];
        championsMap.forEach((champion, index) => {
            let championToBeAddedToList = <ChampionItem key={`ChampionItem-${index}`}/>;

            if (champion !== null) {
                const championByYear = this.getChampionViewModel(champion);

                championToBeAddedToList = (
                    <ChampionItem
                        key={championByYear.key}
                        name={championByYear.driverName}
                        year={championByYear.season}
                        nationality={championByYear.nationality}
                        company={championByYear.team}
                        points={championByYear.points}
                        driverId={championByYear.driverId}
                        carImage={championByYear.carImage}
                        openChampionsByYearPopup={this.props.openChampionsByYearPopup} >
                    </ChampionItem>
                );
            }

            championList.push(championToBeAddedToList);
        });
        return championList;
    }

    getChampionViewModel(champion) {
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
                        viewModel.carImage = this.getCarImageByTeam(viewModel.team);
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

    getCarImageByTeam = (teamName) => {
        if (teamName && carImages[teamName.toUpperCase()]) {
            return carImages[teamName.toUpperCase()];
        }
        return carImages.DEFAULT;
    }
}

ChampionList.propTypes = {
    champions: PropTypes.object.isRequired,
    requestAllChampions: PropTypes.func.isRequired,
    requestNumberOfChampions: PropTypes.func,
    openChampionsByYearPopup: PropTypes.func,
};

const mapStateToProps = state => ({
    champions: state.worldChampions,
});

const mapDispatchToProps = dispatch => ({
    requestAllChampions: (start, end) => dispatch(requestAllChampions(start, end)),
    requestNumberOfChampions: () => dispatch(requestNumberOfWorldChampions()),
    openChampionsByYearPopup: (year, driverId) => dispatch(openChampionsByYearPopup(year, driverId)),
});

export default withStyles(componentStyles)(connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChampionList));
