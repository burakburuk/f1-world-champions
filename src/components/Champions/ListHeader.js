import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#4c4c4c',
    },
});

class ListHeader extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item className="list-header-driver">
                        <h3>Driver</h3>
                    </Grid>
                    <Grid item className="list-header-nationality">
                        <h3>Nationality</h3>
                    </Grid>
                    <Grid item className="list-header-team">
                        <div>
                            <h3>Team</h3>
                        </div>
                    </Grid>
                    <Grid item className="list-header-points">
                        <h3>Points</h3>
                    </Grid>
                </Grid>
                <Divider/>
            </div>
        );
    }
}

ListHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListHeader);
