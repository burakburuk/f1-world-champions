import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChampionItemByYear from './ChampionItemByYear';
import generateGuid from '../../utils/guid';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

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

                itemList.push(<ChampionItemByYear key={generateGuid()} name={driverName}
                                                  year={season} date={date} company={team}
                                                  highlight={selectedDriverId === driverId}
                                                  race={raceName}
                ></ChampionItemByYear>);
            }else{
                itemList.push(<ChampionItemByYear key={generateGuid()}
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
}

const mapStateToProps = (state) => ({
    listByYear: state.champions.listByYear,
    numberOfChampionsInSeason: state.champions.numberOfChampionsInSeason,
    selectedDriverId: state.champions.selectedDriverId
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChampionListByYear))