import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {requestAllChampions} from '../../actions/index';
import ChampionItem from './ChampionItem';
import ChampionItemSkeleton from '../../skeletons/ChampionItemSkeleton';
import ChampionsByYearPopup from '../ChampionsByYear/ChampionsByYearPopup';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 800,
        marginLeft:'auto',
        marginRight:'auto',
    },
});

class ChampionList extends Component {
    componentDidMount(){
        this.props.requestAllChampions(2005,2015);
    }

    render(){
        const { classes,champions } = this.props;
        let loadedChampions = champions.list.length;
        let itemList = champions.list.map(item => {
            const _winner = item.winner.Driver;
            console.log(item);

            return <ChampionItem key={_winner.givenName + new Date().getTime() + Math.random()} name={_winner.givenName}
                                 surname={_winner.familyName} year={item.season}
                                 nationality = {item.winner.Driver.nationality}
                                 company = {item.winner.Constructor.name}
                                 points = {item.winner.points}
            ></ChampionItem>
        });

        for(let i = loadedChampions; i < 11; i++){
            itemList.push(<ChampionItemSkeleton key={new Date().getTime() + Math.random()}/>);
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
}

const mapStateToProps = (state) => ({
    champions: state.champions
})

const mapDispatchToProps = (dispatch) => ({
    requestAllChampions: (start,end) => dispatch(requestAllChampions(start,end))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChampionList))