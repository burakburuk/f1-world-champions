import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

class ChampionItemByYear extends Component{
    render(){
        const { classes, name, surname, race, company, date  } = this.props;

        return (
            <ListItem className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <div className="item-race">
                            {race}
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="by-year-item item-driver">
                            {name + " " + surname}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="by-year-item item-date">
                            {date}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="by-year-item item-company">
                            {company}
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

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChampionItemByYear))