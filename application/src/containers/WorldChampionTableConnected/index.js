import { connect } from 'react-redux';
import {
    fetchWorldChampions,
    fetchNumberOfWorldChampions,
    winnersInSeasonPopup,
} from '../../actions';
import WorldChampionTableContainer from './WorldChampionTableContainer';
import { worldChampionsSelector } from '../../selectors';

const mapStateToProps = state => ({
    champions: worldChampionsSelector.all(state),
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