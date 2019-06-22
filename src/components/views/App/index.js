import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux'
import WorldChampions from '../WorldChampions';
import Bar from "../Bar";
import '../../../index.css';

class App extends Component {
    render() {
        const {store} = this.props;
        return (
            <Provider store={store}>
                <div>
                    <Bar/>
                    <WorldChampions></WorldChampions>
                </div>
            </Provider>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
