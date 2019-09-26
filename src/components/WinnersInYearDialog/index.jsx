import React from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from '../Dialog';
import WinnerTableInYearContainer from '../../containers/WinnerTableInYearContainer';

const WinnersInYearDialog = (props) => {
    const { open, selectedYear, onClose } = props;
    return (
        <Dialog
            open={!!open}>
            <DialogContent
                width={800}>
                <DialogTitle onClose={onClose}>
                    {`Champions of ${selectedYear}`}
                </DialogTitle>
                <WinnerTableInYearContainer/>
            </DialogContent>
        </Dialog>
    );
};

WinnersInYearDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    selectedYear: PropTypes.number,
};

export default WinnersInYearDialog;
