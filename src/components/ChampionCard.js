import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {requestAllChampions} from '../actions';

class ChampionCard extends Component {
    componentDidMount(){
        const pagination = {
            limit:30,
            offset:10
        };
        this.props.requestAllChampions(pagination);
    }

    render(){
        return (
            <div></div>
        );
    }
}

ChampionCard.propTypes = {
    champions: PropTypes.object.isRequired,
    requestAllChampions: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    champions: state.champions
})

const mapDispatchToProps = (dispatch) => ({
    requestAllChampions: (pagination) => dispatch(requestAllChampions(pagination))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChampionCard)