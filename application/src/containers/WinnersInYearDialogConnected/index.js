import { connect } from 'react-redux';
import {
    requestNumberOfChampionsInSeason,
    winnersInYearPopup,
} from '../../actions';
import WinnersInYearDialogContainer from './WinnersInYearDialogContainer';

const mapStateToProps = state => ({
    open: state.champions.popupChampionsByYearOpen,
    selectedYear: state.champions.selectedYear,
});

const mapDispatchToProps = dispatch => ({
    requestNumberOfChampionsInSeason: e => dispatch(requestNumberOfChampionsInSeason(e)),
    onClose: e => dispatch(winnersInYearPopup.close(e)),
});

const WinnersInYearDialogConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(WinnersInYearDialogContainer);

export default WinnersInYearDialogConnected;