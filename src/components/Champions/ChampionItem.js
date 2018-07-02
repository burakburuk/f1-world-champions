import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {openChampionsByYearPopup} from '../../actions/index';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Skeleton from 'react-loading-skeleton';
import teamCar1 from '../../assets/img/teamCar1.jpg';
import teamCar2 from '../../assets/img/teamCar2.jpg';
import teamCar3 from '../../assets/img/teamCar3.jpg';
import teamCar4 from '../../assets/img/teamCar4.jpg';
import teamCar5 from '../../assets/img/teamCar5.jpg';

const carImages = {
    "MERCEDES": teamCar2,
    "RENAULT": teamCar1,
    "MCLAREN": teamCar4,
    "FERRARI": teamCar3,
    "DEFAULT": teamCar5
};

const styles = theme => ({
    root: {
        width: '100%',
        height: 80,
        marginBottom: 15,
        paddingTop: 36,
        backgroundColor: theme.palette.background.paper,
    },
});

class ChampionItem extends Component {
    render() {
        const {
            classes, name, year, driverId,
            image, nationality, company, points
        } = this.props;

        return (
            <ListItem button className={classes.root}
                      onClick={(e) => this.props.openChampionsByYearPopup(year, driverId)}>
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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    openChampionsByYearPopup: (year, driverId) => dispatch(openChampionsByYearPopup(year, driverId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChampionItem))
