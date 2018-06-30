import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initialState from './reducers/initialState';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

const store = configureStore(initialState);
store.runSaga(rootSaga);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
