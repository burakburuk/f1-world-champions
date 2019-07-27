import '../../index.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import WorldChampions from './WorldChampions';
import ChampionsPopup from '../container/ChampionsPopup';
import Bar from './Bar';

const App = (props) => {
    const { store } = props;
    return (
        <Provider store={store}>
            <div className={'App'}>
                <Bar/>
                <WorldChampions></WorldChampions>
                <ChampionsPopup />
            </div>
        </Provider>
    );
};

App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;
