import { connect } from 'react-redux';
import {
    requestAllChampions,
    fetchNumberOfChampionsInSeason,
    winnersInYearPopup,
} from '../../actions';
import WorldChampionTableContainer from './WorldChampionTableContainer';

const mapStateToProps = state => ({
    champions: state.worldChampions,
});

const mapDispatchToProps = dispatch => ({
    requestAllChampions: (start, end) => dispatch(requestAllChampions(start, end)),
    requestNumberOfChampions: () => dispatch(fetchNumberOfChampionsInSeason.start()),
    openChampionsByYearPopup: (year, driverId) => dispatch(winnersInYearPopup.open(year, driverId)),
});

const WorldChampionTableConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorldChampionTableContainer);

export default WorldChampionTableConnected;