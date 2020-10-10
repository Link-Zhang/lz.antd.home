import React from 'react';
import {Row, Col} from 'antd';

import FallHouse from './components/FallHouse';
import RiseHouse from './components/RiseHouse';
import SaleHouse from './components/SaleHouse';
import DashboardTab from './components/DashboardTab';
import AvgTotalPrice from './components/AvgTotalPrice';
import StatisticChart from "./components/StatisticChart";

// import Test from "../../components/Test";

class Dashboard extends React.PureComponent {
    render() {
        return (
            <div>
                <DashboardTab/>
                <Row gutter={[16, 16]}>
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
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <StatisticChart/>
                    </Col>
                    <Col span={12}>
                        <StatisticChart/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
