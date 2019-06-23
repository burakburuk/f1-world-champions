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
import ChampionsByYearPopup from './ChampionsByYearPopup';
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

    getCarImageByTeam(teamName) {
        if (teamName && carImages[teamName.toUpperCase()]) {
            return carImages[teamName.toUpperCase()];
        }
        return carImages['DEFAULT'];
    }

    getChampions = (champions) => {
        const {openChampionsByYearPopup} = this.props;
        let items = [];

        champions.forEach((item, index) => {
            if (item === null) {
                items.push(<ChampionItem key={`ChampionItem-${index}`}/>);
            } else {
                const winner = item.winner;
                const driverName = winner.Driver.givenName + ' ' + winner.Driver.familyName;
                const driverId = winner.Driver.driverId;
                const nationality = winner.Driver.nationality;
                const team = winner.Constructor.name;
                const points = item.points;
                const season = item.season;
                const carImage = this.getCarImageByTeam(team);
                const key = `${driverName}-${season}`;
    
                items.push(
                    <ChampionItem
                        key={key} 
                        name={driverName} 
                        year={season}
                        nationality={nationality} 
                        company={team} 
                        points={points}
                        driverId={driverId}
                        carImage={carImage}
                        openChampionsByYearPopup={openChampionsByYearPopup} >
                    </ChampionItem>
                );
            }
        });        

        return items;
    }

    render() {
        const {classes, champions} = this.props;
        const championsMap = this.populateMap(champions);
        const items = this.getChampions(championsMap);
        
        return (
            <div className={classes.root}>
                <ChampionsByYearPopup/>
                <List component="nav">
                    {items}
                </List>
            </div>
        );
    }

    populateMap = (champions) => {
        let championList = objectAssing(champions.list);
        for (let i = champions.endYear; i >= champions.startYear; i--) {
            if (championList.get(i) === undefined) {
                championList.set(i, null);
            }
        }
        return championList;
    };
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(componentStyles)(ChampionList));
