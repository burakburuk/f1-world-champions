import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Bar from '../Bar';
import GlobalStyle from '../../assets/style/GlobalStyle';
import WorldChampionTableConnected from '../../containers/WorldChampionTableConnected';
import WinnersInYearDialogConnected from '../../containers/WinnersInYearDialogConnected';
import NotificationBoxConnected from '../../containers/NotificationBoxConnected';

const App = (props) => {
    const { store } = props;
    return (
        <Provider store={store}>
            <div>
                <GlobalStyle />
                <Bar/>
                <WorldChampionTableConnected />
                <WinnersInYearDialogConnected />
                <NotificationBoxConnected />
            </div>
        </Provider>
    );
};

App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;
