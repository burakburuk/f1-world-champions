import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChampionItemByYear from '../../views/ChampionItemByYear';
import objectHash from 'object-hash';
import componentStyles from './componentStyles';

class ChampionListByYear extends Component {
    render() {
        const {classes, listByYear, numberOfChampionsInSeason, selectedDriverId} = this.props;
        let itemList = [];
        for (let i = 0; i < numberOfChampionsInSeason; i++) {
            if (listByYear[i]) {
                const _winner = listByYear[i].Results[0];
                const driverId = _winner.Driver.driverId;
                const driverName = _winner.Driver.givenName + " " + _winner.Driver.familyName;
                const team = _winner.Constructor.name;
                const season = listByYear[i].season;
                const date = listByYear[i].date;
                const raceName = listByYear[i].raceName;

                itemList.push(<ChampionItemByYear key={objectHash(listByYear[i])} name={driverName}
                                                  year={season} date={date} company={team}
                                                  highlight={selectedDriverId === driverId}
                                                  race={raceName}
                ></ChampionItemByYear>);
            } else {
                itemList.push(<ChampionItemByYear key={`ChampionItemByYear-${i}`}
                ></ChampionItemByYear>);
            }
        }

        return (
            <div className={classes.root}>
                <List component="nav">
                    {itemList}
                </List>
            </div>
        );
    }
}

ChampionListByYear.propTypes = {
    listByYear: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    listByYear: state.champions.listByYear,
    numberOfChampionsInSeason: state.champions.numberOfChampionsInSeason,
    selectedDriverId: state.champions.selectedDriverId
});

export default connect(mapStateToProps)(withStyles(componentStyles)(ChampionListByYear))
