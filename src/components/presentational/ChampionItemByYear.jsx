import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Skeleton from 'react-loading-skeleton';
import componentStyles from './ChampionItemByYearStyle';

const ChampionItemByYear = (props) => {
    const {
        classes,
        name,
        race,
        company,
        date,
        highlight,
    } = props;

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
                    <div className={highlight ? 'by-name-item-highlight' : 'by-driver'}>
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
};

ChampionItemByYear.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string,
    race: PropTypes.string,
    company: PropTypes.string,
    date: PropTypes.string,
    highlight: PropTypes.bool,
};

export default withStyles(componentStyles)(ChampionItemByYear);
