import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';

import store from './redux/Store';
import App from './components/App';


const root = (
    <Provider store={store().store}>
        <PersistGate loading={null} persistor={store().persistor}>
            <Router>
                <App/>
            </Router>
        </PersistGate>
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
