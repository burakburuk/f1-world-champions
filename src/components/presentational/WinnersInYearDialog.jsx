import React from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from './Dialog';
import WinnerTableInYearContainer from '../container/WinnerTableInYearContainer';

const WinnersInYearDialog = (props) => {
    const { open, selectedYear, onClose } = props;
    return (
        <Dialog
            open={!!open}>
            <DialogTitle onClose={onClose}>
                {`Champions of ${selectedYear}`}
            </DialogTitle>
            <DialogContent>
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
