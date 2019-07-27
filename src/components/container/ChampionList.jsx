import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {
    requestAllChampions,
    requestNumberOfWorldChampions,
    openChampionsByYearPopup
} from '../../actions';
import ChampionItem from '../presentational/ChampionItem';
import objectAssing from 'object-assign';
import componentStyles from './ChampionListStyles';
import teamCar1 from '../../assets/img/teamCar1.jpg';
import teamCar2 from '../../assets/img/teamCar2.jpg';
import teamCar3 from '../../assets/img/teamCar3.jpg';
import teamCar4 from '../../assets/img/teamCar4.jpg';
import teamCar5 from '../../assets/img/teamCar5.jpg';

const carImages = {
    'MERCEDES': teamCar2,
    'RENAULT': teamCar1,
    'MCLAREN': teamCar4,
    'FERRARI': teamCar3,
    'DEFAULT': teamCar5
};

class ChampionList extends Component {
    componentDidMount() {
        this.props.requestNumberOfChampions();
        this.props.requestAllChampions(2005, 2015);
    }

    render() {
        const {champions} = this.props;
        const championListByYear = this.createChampionListByYears(champions);
        const allChampions = this.getChampionListFromMap(championListByYear);
        
        return ( 
            <React.Fragment>
                {allChampions}
            </React.Fragment>
        );
    }

    createChampionListByYears = (champions) => {
        let championList = objectAssing(champions.list);
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
        if (champion !== null) {
            const winner = champion.winner;
            const team = winner.Constructor.name;
            const season = champion.season;
            let driverName = '';
            let driverId = '';
            let nationality = '';
            if (winner && winner.Driver) {
                if (winner.Driver.givenName) {
                    driverName = winner.Driver.givenName + ' ' + winner.Driver.familyName;
                }
                if (winner.Driver.driverId) {
                    driverId = winner.Driver.driverId;
                }
                if(winner.Driver.nationality) {
                    nationality = winner.Driver.nationality;
                }
            }
            return {
                winner,
                driverName,
                driverId,
                nationality,
                team,
                points: champion.points,
                season,
                carImage: this.getCarImageByTeam(team),
                key: `${driverName}-${season}`,
            };
        }
        
        return null;
    }

    getCarImageByTeam(teamName) {
        if (teamName && carImages[teamName.toUpperCase()]) {
            return carImages[teamName.toUpperCase()];
        }
        return carImages['DEFAULT'];
    }
}

ChampionList.propTypes = {
    champions: PropTypes.object.isRequired,
    requestAllChampions: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    champions: state.worldChampions
});

const mapDispatchToProps = (dispatch) => ({
    requestAllChampions: (start, end) => dispatch(requestAllChampions(start, end)),
    requestNumberOfChampions: () => dispatch(requestNumberOfWorldChampions()),
    openChampionsByYearPopup: (year, driverId) => dispatch(openChampionsByYearPopup(year, driverId)),
});

export default withStyles(componentStyles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(ChampionList));