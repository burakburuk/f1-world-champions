import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {requestAllChampions, requestNumberOfWorldChampions} from '../../actions/index';
import ChampionItem from './ChampionItem';
import generateGuid from '../../utils/guid';
import ChampionsByYearPopup from '../ChampionsByYear/ChampionsByYearPopup';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

class ChampionList extends Component {
    componentDidMount() {
        this.props.requestNumberOfChampions();
        this.props.requestAllChampions(2005, 2015);
    }


    render() {
        const {classes, champions} = this.props;
        let itemList = [];
        for (let i = 0; i < champions.numberOfWorldChampions; i++) {
            if (champions.list[i]) {
                const _winner = champions.list[i].winner;
                const driverName = _winner.Driver.givenName + " " + _winner.Driver.familyName;
                const driverId = _winner.Driver.driverId;
                const nationality = _winner.Driver.nationality;
                const team = _winner.Constructor.name;
                const points = champions.list[i].points;
                const season = champions.list[i].season;

                itemList.push(<ChampionItem key={generateGuid()} name={driverName} year={season}
                                            nationality={nationality} company={team} points={points} driverId={driverId}
                ></ChampionItem>);
            } else {
                itemList.push(<ChampionItem key={generateGuid()}/>);
            }
        }

        return (
            <div className={classes.root}>
                <List component="nav">
                    {itemList}
                </List>
                <ChampionsByYearPopup/>
            </div>
        );
    }
}

ChampionList.propTypes = {
    champions: PropTypes.object.isRequired,
    requestAllChampions: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    champions: state.champions
})

const mapDispatchToProps = (dispatch) => ({
    requestAllChampions: (start, end) => dispatch(requestAllChampions(start, end)),
    requestNumberOfChampions: () => dispatch(requestNumberOfWorldChampions()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChampionList))