import { connect } from 'react-redux';
import WinnerTableInYearContainer from './WinnerTableInYearContainer';
import { winnersInSeasonSelector } from '../../selectors';

const mapStateToProps = state => ({
    listByYear: winnersInSeasonSelector.listByYear(state),
    numberOfChampionsInSeason: winnersInSeasonSelector.numberOfChampionsInSeason(state),
    selectedDriverId: winnersInSeasonSelector.selectedDriverId(state),
});

const WinnerTableInYearConnected = connect(mapStateToProps)(WinnerTableInYearContainer);

export default WinnerTableInYearConnected;