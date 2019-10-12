import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    closeChampionsByYearPopup,
    requestNumberOfChampionsInSeason,
} from '../actions';
import WinnersInYearDialog from '../components/WinnersInYearDialog';

class WinnersInYearDialogContainer extends Component {
    componentDidMount() {
        this.props.requestNumberOfChampionsInSeason();
    }

    render() {
        const { open, selectedYear } = this.props;
        return (
            <WinnersInYearDialog
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

WinnersInYearDialogContainer.propTypes = {
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
    onClose: e => dispatch(closeChampionsByYearPopup(e)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WinnersInYearDialogContainer);
