import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Skeleton from 'react-loading-skeleton';

const styles = theme => ({
    root: {
        width: '100%',
        height: 90,
        marginBottom: 0,
        paddingTop: 0,
        backgroundColor: theme.palette.background.paper,
    },
});

class ChampionItemByYear extends Component {
    render() {
        const {classes, name, race, company, date, highlight} = this.props;
        return (
            <ListItem className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <div className="item-race">
                            {race || <Skeleton/>}
                        </div>
                        <Divider/>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={highlight ? "by-name-item-highlight" : "by-driver"}>
                            {name || <Skeleton/>}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="by-item by-year-item item-date">
                            {date || <Skeleton/>}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="by-item by-year-item item-company">
                            {company || <Skeleton/>}
                        </div>
                    </Grid>
                </Grid>
            </ListItem>
        );
    }
}

ChampionItemByYear.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChampionItemByYear))