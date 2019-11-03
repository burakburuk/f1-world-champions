import { connect } from 'react-redux';
import {
    fetchNumberOfWinnersInSeason,
    winnersInSeasonPopup,
} from '../../actions';
import { winnersInSeasonSelector } from '../../selectors';
import WinnersInYearDialogContainer from './WinnersInYearDialogContainer';

const mapStateToProps = state => ({
    open: winnersInSeasonSelector.popupChampionsByYearOpen(state),
    selectedYear: winnersInSeasonSelector.selectedYear(state),
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