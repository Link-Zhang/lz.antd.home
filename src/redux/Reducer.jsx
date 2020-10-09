import {combineReducers} from 'redux';

import App from '../acirs/App';
import Dashboard from '../acirs/Dashboard';

export default () => combineReducers({
    App: App.reducer,
    Dashboard: Dashboard.reducer,
});
