import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import ChampionListByYear from '../container/ChampionListByYear';

const ChampionsByYearPopup = (props) => {
    const {classes, popupChampionsByYearOpen, selectedYear} = props;
    return (
        <div className={classes.root}>
            <Dialog
                open={popupChampionsByYearOpen}
                keepMounted
                fullWidth
                onClose={props.onClose}>
                <DialogTitle id="alert-dialog-slide-title">
                    {'Champions of ' + selectedYear}
                </DialogTitle>
                <DialogContent>
                    <ChampionListByYear/>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={props.closeChampionsByYearPopup}
                        color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ChampionsByYearPopup;