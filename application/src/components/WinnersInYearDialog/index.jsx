import React from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from '../Dialog';
import WinnerTableInYearConnected from '../../containers/WinnerTableInYearConnected';

const WinnersInYearDialog = (props) => {
    const { open, selectedYear, onClose } = props;
    return (
        <Dialog
            data-id="winners-dialog"
            open={!!open}>
            <DialogContent
                width={800}>
                <DialogTitle onClose={onClose}>
                    {`Champions of ${selectedYear}`}
                </DialogTitle>
                <WinnerTableInYearConnected/>
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
