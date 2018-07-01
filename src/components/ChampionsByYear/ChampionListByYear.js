import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChampionItemByYear from './ChampionItemByYear';
import ChampionItemSkeleton from '../../skeletons/ChampionItemSkeleton';

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
        const {classes, listByYear} = this.props;
        let loadedChampions = listByYear.length;
        let itemList = listByYear.map(item => {
            const _winner = item.Results[0].Driver;
            const _constructor = item.Results[0].Constructor;
            console.log(item);

            return <ChampionItemByYear key={_winner.givenName + new Date().getTime() + Math.random()}
                                       name={_winner.givenName}
                                       surname={_winner.familyName} year={item.season}
                                       date={item.date}
                                       company={_constructor.name}
                                       race={item.raceName}
            ></ChampionItemByYear>
        });

        for (let i = loadedChampions; i < 11; i++) {
            itemList.push(<ChampionItemSkeleton key={new Date().getTime() + Math.random()}/>);
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
    listByYear: state.champions.listByYear
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChampionListByYear))