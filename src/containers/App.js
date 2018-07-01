import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import ChampionCard from '../components/Champions/ChampionList';
import '../App.css';

class App extends Component {
  render() {
      const {store} = this.props;
    return (
        <Provider store={store}>
            <ChampionCard></ChampionCard>
        </Provider>
    );
  }
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
