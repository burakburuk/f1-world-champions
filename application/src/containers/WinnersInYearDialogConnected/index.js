import { connect } from 'react-redux';
import {
    fetchNumberOfWinnersInSeason,
    winnersInSeasonPopup,
} from '../../actions';
import WinnersInYearDialogContainer from './WinnersInYearDialogContainer';

const mapStateToProps = state => ({
    open: state.champions.popupChampionsByYearOpen,
    selectedYear: state.champions.selectedYear,
});

const mapDispatchToProps = dispatch => ({
    requestNumberOfChampionsInSeason: e => dispatch(fetchNumberOfWinnersInSeason.start(e)),
    onClose: e => dispatch(winnersInSeasonPopup.close(e)),
});

const WinnersInYearDialogConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(WinnersInYearDialogContainer);

export default WinnersInYearDialogConnected;