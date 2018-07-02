import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux'
import WorldChampions from './WorldChampions';
import '../App.css';
import Bar from "./Bar";

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
