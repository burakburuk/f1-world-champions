import '../index.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import WorldChampionTableContainer from '../container/WorldChampionTableContainer';
import WinnersInYearDialogContainer from '../container/WinnersInYearDialogContainer';
import Bar from './Bar';

const App = (props) => {
    const { store } = props;
    return (
        <Provider store={store}>
            <div>
                <Bar/>
                <WorldChampionTableContainer />
                <WinnersInYearDialogContainer />
            </div>
        </Provider>
    );
};

App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;
