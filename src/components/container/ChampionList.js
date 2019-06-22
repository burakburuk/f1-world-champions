import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {requestAllChampions, requestNumberOfWorldChampions, openChampionsByYearPopup} from '../../actions';
import ChampionItem from '../presentational/ChampionItem';
import objectHash from 'object-hash';
import ChampionsByYearPopup from './ChampionsByYearPopup';
import objectAssing from 'object-assign';
import componentStyles from './ChampionListStyles';

class ChampionList extends Component {
    componentDidMount() {
        this.props.requestNumberOfChampions();
        this.props.requestAllChampions(2005, 2015);
    }

    render() {
        const {classes, champions, openChampionsByYearPopup} = this.props;
        const _champions = this.populateMap(champions);

        let items = [];
        _champions.forEach((item, index) => {
            if (item === null) {
                items.push(<ChampionItem key={`ChampionItem-${index}`}/>);
            } else {
                const _winner = item.winner;
                const driverName = _winner.Driver.givenName + ' ' + _winner.Driver.familyName;
                const driverId = _winner.Driver.driverId;
                const nationality = _winner.Driver.nationality;
                const team = _winner.Constructor.name;
                const points = item.points;
                const season = item.season;

                items.push(<ChampionItem key={objectHash(item)} name={driverName} year={season}
                                         nationality={nationality} company={team} points={points}
                                         driverId={driverId}
                                         openChampionsByYearPopup={openChampionsByYearPopup}
                ></ChampionItem>);
            }
        });

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
        let _champions = objectAssing(champions.list);
        for (let i = champions.endYear; i >= champions.startYear; i--) {
            if (_champions.get(i) === undefined) {
                _champions.set(i, null);
            }
        }
        return _champions;
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
