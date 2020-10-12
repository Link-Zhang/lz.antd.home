import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Layout, Menu, Switch} from 'antd';

import './index.less';
import Svg from '../Svg';
import {appSwitchThemeActionCreator} from '../../acirs/App';

const {Header} = Layout;
const {SubMenu} = Menu;

class Head extends React.PureComponent {
    render() {
        return (
            <Header className={this.props.darkTheme ? 'head-header-dark' : 'head-header-light'}>
                <Menu className={'head-header-menu'} mode={'horizontal'}
                      theme={this.props.darkTheme ? 'dark' : 'light'}>
                    <SubMenu title={<span><Svg type={'UserOutlined'}/>{this.props.userName}</span>}>
                        <Menu.Item key={'theme'}>
                            <Svg type={'AlertOutlined'}/>
                            <Switch size={'small'} checked={this.props.darkTheme}
                                    onChange={this.props.handleSwitchTheme}/>
                        </Menu.Item>
                        <Menu.Item key={'logout'}>
                            <Svg type={'LogoutOutlined'}/>
                            <span>注销</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}

Head.propTypes = {
    userName: PropTypes.string,
    darkTheme: PropTypes.bool,
};

const mapStateToProps = (state) => {
    return {
        userName: state.App.userName,
        darkTheme: state.App.darkTheme,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSwitchTheme: bindActionCreators(appSwitchThemeActionCreator, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Head);
