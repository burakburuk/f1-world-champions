import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {closeChampionsByYearPopup, requestNumberOfChampionsInSeason} from '../../actions';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import ChampionListByYear from './ChampionListByYear';

const styles = theme => ({
    root: {
        width: 600,
        height: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        display:'none'
    },
});

class ChampionByYearPopup extends Component {
    componentDidMount() {
        this.props.requestNumberOfChampionsInSeason();
    }

    render() {
        const {classes, popupChampionsByYearOpen, selectedYear} = this.props;
        return (
            <div className={classes.root}>
                <Dialog
                    open={popupChampionsByYearOpen}
                    keepMounted
                    fullWidth
                    onClose={this.handleClose}>
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Champions of " + selectedYear}
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
            </div>
        );
    }
}

ChampionByYearPopup.propTypes = {
    popupChampionsByYearOpen: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    popupChampionsByYearOpen: state.champions.popupChampionsByYearOpen,
    selectedYear: state.champions.selectedYear
});

const mapDispatchToProps = (dispatch) => ({
    requestNumberOfChampionsInSeason: (e) => dispatch(requestNumberOfChampionsInSeason(e)),
    closeChampionsByYearPopup: (e) => dispatch(closeChampionsByYearPopup(e))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChampionByYearPopup))