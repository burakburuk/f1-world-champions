import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    closeChampionsByYearPopup,
    requestNumberOfChampionsInSeason,
} from '../../actions';
import ChampionsByYearPopup from '../presentational/ChampionsByYearPopup';
import componentStyles from './ChampionsByYearPopupStyles';

class ChampionsPopup extends Component {
    componentDidMount() {
        this.props.requestNumberOfChampionsInSeason();
    }

    render() {
        const { classes, open, selectedYear } = this.props;
        return (
            <ChampionsByYearPopup
                classes={classes}
                open={open}
                selectedYear={selectedYear}
                onClose={this.handleClose}
            />
        );
    }

    handleClose = (event) => {
        this.props.onClose(event);
    }
}

ChampionsPopup.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool,
    requestNumberOfChampionsInSeason: PropTypes.func.isRequired,
    onClose: PropTypes.func,
    selectedYear: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    open: state.champions.popupChampionsByYearOpen,
    selectedYear: state.champions.selectedYear,
});

const mapDispatchToProps = dispatch => ({
    requestNumberOfChampionsInSeason: e => dispatch(requestNumberOfChampionsInSeason(e)),
    closeChampionsByYearPopup: e => dispatch(closeChampionsByYearPopup(e)),
});

export default withStyles(componentStyles)(connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChampionsPopup));
