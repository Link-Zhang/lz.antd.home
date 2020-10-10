import React from 'react';
import {Layout} from 'antd';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import './index.less';
import Foot from '../Foot';
import Head from '../Head';
import Side from '../Side';
import Bread from '../Bread';
import House from '../../pages/House';
import Community from '../../pages/Community';
import Dashboard from '../../pages/Dashboard/index';

const routes = [
    {
        path: "/",
        exact: true,
        children: <Dashboard/>
    },
    {
        path: "/community",
        children: <Community/>
    },
    {
        path: "/house",
        children: <House/>
    }
];

const {Content} = Layout;

class App extends React.Component {
    render() {
        if (this.props.darkTheme) {
            console.log("Dark Mode");
            require('./dark.less');
        } else {
            console.log("Light Mode");
            require('./light.less');
        }
        return (
            <Layout>
                <Side/>
                <Layout
                    className={this.props.sideCollapse ? 'app-layout-collapse' : 'app-layout-normal'}>
                    <Head/>
                    <Content className={'app-layout-content'}>
                        <Bread/>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={route.children}
                                />
                            ))}
                        </Switch>
                    </Content>
                    <Foot/>
                </Layout>
            </Layout>
        );
    }
}

App.propTypes = {
    sideCollapse: PropTypes.bool,
    darkTheme: PropTypes.bool,
};

const mapStateToProps = (state) => {
    return {
        sideCollapse: state.App.sideCollapse,
        darkTheme: state.App.darkTheme,
    };
};

export default connect(mapStateToProps, null)(App);
