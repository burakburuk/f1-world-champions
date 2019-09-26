import '../../index.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Bar from '../Bar';
import WorldChampionTableContainer from '../../containers/WorldChampionTableContainer';
import WinnersInYearDialogContainer from '../../containers/WinnersInYearDialogContainer';
import NotificationBoxContainer from '../../containers/NotificationBoxContainer';

const App = (props) => {
    const { store } = props;
    return (
        <Provider store={store}>
            <div>
                <Bar/>
                <WorldChampionTableContainer />
                <WinnersInYearDialogContainer />
                <NotificationBoxContainer />
            </div>
        </Provider>
    );
};

App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;