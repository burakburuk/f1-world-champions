import { connect } from 'react-redux';
import WinnerTableInYearContainer from './WinnerTableInYearContainer';
import { winnersInSeasonSelector } from '../../selectors';

const mapStateToProps = state => ({
    listByYear: winnersInSeasonSelector.list(state),
    count: winnersInSeasonSelector.count(state),
    selectedDriverId: winnersInSeasonSelector.selectedDriverId(state),
});

const WinnerTableInYearConnected = connect(mapStateToProps)(WinnerTableInYearContainer);

export default WinnerTableInYearConnected;
