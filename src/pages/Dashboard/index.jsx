import React from 'react';
import {Row, Col} from 'antd';

import FallHouse from './components/FallHouse';
import RiseHouse from './components/RiseHouse';
import SaleHouse from './components/SaleHouse';
import DashboardTab from './components/DashboardTab';
import AvgUnitPrice from './components/AvgUnitPrice';
import AvgTotalPrice from './components/AvgTotalPrice';
import AvgUnitPriceChart from "./components/AvgUnitPriceChart";
import AvgTotalPriceChart from "./components/AvgTotalPriceChart";
import RiseFallHouseChart from "./components/RiseFallHouseChart";

class Dashboard extends React.PureComponent {
    render() {
        return (
            <div>
                <DashboardTab/>
                <Row gutter={[16, 16]}>
                    <Col span={5}>
                        <AvgTotalPrice/>
                    </Col>
                    <Col span={5}>
                        <AvgUnitPrice/>
                    </Col>
                    <Col span={4}>
                        <SaleHouse/>
                    </Col>
                    <Col span={5}>
                        <RiseHouse/>
                    </Col>
                    <Col span={5}>
                        <FallHouse/>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <AvgTotalPriceChart/>
                    </Col>
                    <Col span={12}>
                        <AvgUnitPriceChart/>
                    </Col>
                    <Col span={24}>
                        <RiseFallHouseChart/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
