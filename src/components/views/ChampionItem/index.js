import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Skeleton from 'react-loading-skeleton';
import componentStyles from './componentStyles';
import teamCar1 from '../../../assets/img/teamCar1.jpg';
import teamCar2 from '../../../assets/img/teamCar2.jpg';
import teamCar3 from '../../../assets/img/teamCar3.jpg';
import teamCar4 from '../../../assets/img/teamCar4.jpg';
import teamCar5 from '../../../assets/img/teamCar5.jpg';

const carImages = {
    "MERCEDES": teamCar2,
    "RENAULT": teamCar1,
    "MCLAREN": teamCar4,
    "FERRARI": teamCar3,
    "DEFAULT": teamCar5
};

class ChampionItem extends Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.classes === this.props.classes &&
            nextProps.name === this.props.name &&
            nextProps.year === this.props.year &&
            nextProps.driverId === this.props.driverId &&
            nextProps.image === this.props.image &&
            nextProps.nationality === this.props.nationality &&
            nextProps.company === this.props.company &&
            nextProps.points === this.props.points) {
            return false;
        }
        return true;
    }

    render() {
        const {
            classes, name, year, driverId,
            nationality, company, points,
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
                            {company ?
                                <img alt="no_image" src={carImages[company.toUpperCase()] || carImages["DEFAULT"]}/> :
                                <Skeleton/>}

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
