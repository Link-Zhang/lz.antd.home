import React from 'react';
import {Layout} from 'antd';
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
        return (
            <Layout>
                <Side/>
                <Layout>
                    <Head/>
                    <Content className={'app-content'}>
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

export default App;
