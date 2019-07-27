import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import ChampionListByYear from '../container/ChampionListByYear';

const ChampionsByYearPopup = (props) => {
    const { classes, open, selectedYear } = props;
    return (
        <div className={classes.root}>
            <Dialog
                open={!!open}
                keepMounted
                fullWidth
                onClose={props.onClose}>
                <DialogTitle id="alert-dialog-slide-title">
                    {`Champions of ${selectedYear}`}
                </DialogTitle>
                <DialogContent>
                    <ChampionListByYear/>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={props.onClose}
                        color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

ChampionsByYearPopup.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    selectedYear: PropTypes.number,
};

export default ChampionsByYearPopup;
