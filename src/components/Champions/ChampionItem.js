import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {openChampionsByYearPopup} from '../../actions/index';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import teamCar3 from '../../assets/img/teamCar3.jpg';

const styles = theme => ({
    root: {
        width: '100%',
        height: 115,
        marginBottom:15,
        paddingTop: 36,
        backgroundColor: theme.palette.background.paper,
    },
});

class ChampionItem extends Component{
    render(){
        const { classes, name, surname, year,
            image, nationality, company, points  } = this.props;

        return (
            <ListItem button className={classes.root} onClick={(e) => this.props.openChampionsByYearPopup(year)}>
                <Grid container spacing={8}>
                    <Grid item style={{width:42}}>
                        <div className="item-year">
                            {year}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="ch-item item-driver">
                            {name + " " + surname}
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <div className="ch-item item-nationality">
                            {nationality}
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <div className="ch-item item-company">
                            {company}
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="item-image">
                            <img alt="no_image" src={teamCar3}/>
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <div className="ch-item item-points">
                            {points}
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
    openChampionsByYearPopup: (year) => dispatch(openChampionsByYearPopup(year)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChampionItem))