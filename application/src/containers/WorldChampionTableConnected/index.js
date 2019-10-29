import { connect } from 'react-redux';
import {
    requestAllChampions,
    requestNumberOfWorldChampions,
    openChampionsByYearPopup,
} from '../../actions';
import WorldChampionTableContainer from './WorldChampionTableContainer';

const mapStateToProps = state => ({
    champions: state.worldChampions,
});

const mapDispatchToProps = dispatch => ({
    requestAllChampions: (start, end) => dispatch(requestAllChampions(start, end)),
    requestNumberOfChampions: () => dispatch(requestNumberOfWorldChampions()),
    openChampionsByYearPopup: (year, driverId) => dispatch(openChampionsByYearPopup(year, driverId)),
});

const WorldChampionTableConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorldChampionTableContainer);

export default WorldChampionTableConnected;