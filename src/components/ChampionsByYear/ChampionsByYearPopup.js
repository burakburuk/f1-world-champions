import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {closeChampionsByYearPopup} from '../../actions';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import ChampionListByYear from './ChampionListByYear';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 800,
        marginLeft:'auto',
        marginRight:'auto',
    },
});

class ChampionByYearPopup extends Component {

    render(){
        const {popupChampionsByYearOpen} = this.props;
        return (
            <Dialog
                open={popupChampionsByYearOpen}
                keepMounted
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="alert-dialog-slide-title">
                    {"Champion List in a season"}
                </DialogTitle>
                <DialogContent>
                    <ChampionListByYear/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => this.props.closeChampionsByYearPopup(e)} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

ChampionByYearPopup.propTypes = {
    popupChampionsByYearOpen: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    popupChampionsByYearOpen: state.champions.popupChampionsByYearOpen
})

const mapDispatchToProps = (dispatch) => ({
    closeChampionsByYearPopup: (e) => dispatch(closeChampionsByYearPopup(e))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChampionByYearPopup))