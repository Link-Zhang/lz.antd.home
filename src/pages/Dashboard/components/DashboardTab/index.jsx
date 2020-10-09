import React from 'react';
import {Tabs} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import axios from 'axios';

import menu from './config';
import {dashboardDataLoadActionCreator} from '../../../../acirs/Dashboard';

class DashboardTab extends React.PureComponent {
    // constructor() {
    //     super();
    // axios.get('http://172.16.23.9:2143/actuator/health').then(
    //     function (response) {
    //         console.log(response.data);
    // }
    // );
    // }

    handleTabClick = key => {
        console.log(key);
    };


    constructor() {
        super();
        this.tabMenu = menu.map(
            (item) => {
                return (
                    <Tabs.TabPane tab={item} key={item}/>
                );
            }
        );
        this.handleTabClick(menu[0]);
    }

    render() {
        return (
            <Tabs onChange={this.handleTabClick} defaultActiveKey={menu[0]} size={'large'} centered={true}
                  animated={true}>
                {this.tabMenu}
            </Tabs>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDataLoad: bindActionCreators(dashboardDataLoadActionCreator, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(DashboardTab);
