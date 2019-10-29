import { connect } from 'react-redux';
import {
    closeChampionsByYearPopup,
    requestNumberOfChampionsInSeason,
} from '../../actions';
import WinnersInYearDialogContainer from './WinnersInYearDialogContainer';

const mapStateToProps = state => ({
    open: state.champions.popupChampionsByYearOpen,
    selectedYear: state.champions.selectedYear,
});

const mapDispatchToProps = dispatch => ({
    requestNumberOfChampionsInSeason: e => dispatch(requestNumberOfChampionsInSeason(e)),
    onClose: e => dispatch(closeChampionsByYearPopup(e)),
});

const WinnersInYearDialogConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(WinnersInYearDialogContainer);

export default WinnersInYearDialogConnected;