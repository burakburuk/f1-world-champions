import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Skeleton from 'react-loading-skeleton';
import componentStyles from './ChampionItemStyles';

class ChampionItem extends PureComponent {
    render() {
        const {
            classes, name, year, driverId,
            nationality, company, points, carImage,
            openChampionsByYearPopup
        } = this.props;

        return (
            <ListItem button className={classes.root}
                      onClick={(e) => openChampionsByYearPopup(year, driverId)}>
                <Grid container spacing={8}>
                    <Grid item style={{width: 18}}>
                        <div className="item-year">
                            {year}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="ch-item item-driver">
                            {name || <Skeleton/>}
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className="ch-item item-nationality">
                            {nationality || <Skeleton/>}
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className="ch-item item-company">
                            {company || <Skeleton/>}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="item-image">
                            {company ? <img alt="no_image" src={carImage}/> : <Skeleton/>}

                        </div>
                    </Grid>
                    <Grid item>
                        <div className="ch-item item-points">
                            {points || <Skeleton/>}
                        </div>
                    </Grid>
                </Grid>
            </ListItem>
        );
    }
}

ChampionItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(componentStyles)(ChampionItem);
