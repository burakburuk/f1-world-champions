import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WinnersInYearDialog from '../../components/WinnersInYearDialog';

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

export default WinnersInYearDialogContainer;