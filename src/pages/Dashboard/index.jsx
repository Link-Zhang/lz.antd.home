import React from 'react';
import {Row, Col} from 'antd';

import FallHouse from './components/FallHouse';
import RiseHouse from './components/RiseHouse';
import SaleHouse from './components/SaleHouse';
import DashboardTab from './components/DashboardTab';
import AvgTotalPrice from './components/AvgTotalPrice';

// import Test from "../../components/Test";

class Dashboard extends React.PureComponent {
    render() {
        return (
            <div>
                <DashboardTab/>
                <div>
                    <Row gutter={8}>
                        <Col span={6}>
                            <SaleHouse/>
                        </Col>
                        <Col span={6}>
                            <AvgTotalPrice/>
                        </Col>
                        <Col span={6}>
                            <RiseHouse/>
                        </Col>
                        <Col span={6}>
                            <FallHouse/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
