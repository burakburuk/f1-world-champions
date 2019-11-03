import { connect } from 'react-redux';
import {
    fetchWorldChampions,
    fetchNumberOfWorldChampions,
    winnersInSeasonPopup,
} from '../../actions';
import WorldChampionTableContainer from './WorldChampionTableContainer';

const mapStateToProps = state => ({
    champions: state.worldChampions,
});

const mapDispatchToProps = dispatch => ({
    requestAllChampions: (start, end) => dispatch(fetchWorldChampions.start(start, end)),
    requestNumberOfChampions: () => dispatch(fetchNumberOfWorldChampions.start()),
    openChampionsByYearPopup: (year, driverId) => dispatch(winnersInSeasonPopup.open(year, driverId)),
});

const WorldChampionTableConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorldChampionTableContainer);

export default WorldChampionTableConnected;