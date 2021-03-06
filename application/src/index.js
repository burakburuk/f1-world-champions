import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import initialState from './reducers/initialState';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

const store = configureStore(initialState);
store.runSaga(rootSaga);

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root'),
);
