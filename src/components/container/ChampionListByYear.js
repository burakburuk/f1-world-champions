import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChampionItemByYear from '../presentational/ChampionItemByYear';
import componentStyles from './ChampionListByYearStyles';

class ChampionListByYear extends Component {

    getChampionList = () => {
        const {listByYear, numberOfChampionsInSeason, selectedDriverId} = this.props;
        let itemList = [];

        for (let i = 0; i < numberOfChampionsInSeason; i++) {
            if (listByYear[i]) {                
                const winner = listByYear[i].Results[0];
                const driverId = winner.Driver.driverId;
                const driverName = winner.Driver.givenName + ' ' + winner.Driver.familyName;
                const team = winner.Constructor.name;
                const season = listByYear[i].season;
                const date = listByYear[i].date;
                const raceName = listByYear[i].raceName;
                const key = `${driverName}-${date}`;

                itemList.push(
                    <ChampionItemByYear
                        key={key} 
                        name={driverName}
                        year={season}
                        date={date}
                        company={team}
                        highlight={selectedDriverId === driverId}
                        race={raceName} >
                    </ChampionItemByYear>
                );
            } else {
                itemList.push(
                    <ChampionItemByYear key={`ChampionItemByYear-${i}`}>
                    </ChampionItemByYear>
                );
            }
        }

        return itemList;
    }

    render() {
        const {classes} = this.props;
        const championList = this.getChampionList();

        return (
            <div className={classes.root}>
                <List component="nav">
                    {championList}
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

export default connect(mapStateToProps)(withStyles(componentStyles)(ChampionListByYear));
