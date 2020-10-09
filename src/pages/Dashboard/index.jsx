import React from 'react';
import {Row, Col} from 'antd';

import DashboardTab from './components/DashboardTab';
import Test from "../../components/Test";

class Dashboard extends React.PureComponent {
    render() {
        return (
            <div>
                <DashboardTab/>
                <div>
                    <Row gutter={24}>
                        <Col lg={24} md={24}>
                            <Test/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
