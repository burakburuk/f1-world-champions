import { connect } from 'react-redux';
import WinnerTableInYearContainer from './WinnerTableInYearContainer';

const mapStateToProps = state => ({
    listByYear: state.champions.listByYear,
    numberOfChampionsInSeason: state.champions.numberOfChampionsInSeason,
    selectedDriverId: state.champions.selectedDriverId,
});

const WinnerTableInYearConnected = connect(mapStateToProps)(WinnerTableInYearContainer);

export default WinnerTableInYearConnected;