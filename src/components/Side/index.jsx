import React from 'react';
import {Layout, Menu} from 'antd';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import Svg from '../Svg';
import Logo from '../Logo';
import menu from './config';
import {appSideCollapseActionCreator} from '../../acirs/App';

const {Sider} = Layout;
const {SubMenu} = Menu;

class Side extends React.PureComponent {
    static translateMenuItem(object, path) {
        const parentPath = path.join('/');
        return (
            <Menu.Item key={object.key}>
                {object.svg && <Svg type={object.svg}/>}
                <span>{object.name}</span>
                <Link to={`/${parentPath}`}/>
            </Menu.Item>
        );
    }

    constructor() {
        super();
        const pathStack = [];
        const firstItem = [];
        this.l1Menu = menu.map((l1) => {
            if (l1.child) {
                pathStack.push(l1.key);
                const l2Menu = l1.child.map((l2) => {
                    pathStack.push(l2.key);
                    const tmp = Side.translateMenuItem(l2, pathStack);
                    pathStack.pop();
                    return tmp;
                });
                pathStack.pop();
                return (
                    <SubMenu key={l1.key} title={
                        <span>
                            <Svg type={l1.svg}/>
                            <span>{l1.name}</span>
                        </span>
                    }>
                        {l2Menu}
                    </SubMenu>
                )
            } else {
                if (firstItem.length === 0) {
                    firstItem.push(l1.key);
                }
                return (
                    <Menu.Item key={l1.key}>
                        {l1.svg && <Svg type={l1.svg}/>}
                        <span>{l1.name}</span>
                        <Link to={`/${l1.key}`}/>
                    </Menu.Item>
                );
            }
        });
        this.firstItem = firstItem;
    }

    render() {
        return (
            <Sider theme={this.props.darkTheme ? 'dark' : 'light'} collapsible collapsed={this.props.sideCollapse}
                   onCollapse={this.props.handleSideCollapse}
                   style={{
                       height: '100vh',
                   }}>
                <Logo/>
                <Menu theme={this.props.darkTheme ? 'dark' : 'light'} defaultSelectedKeys={this.firstItem}
                      mode='inline'>
                    {this.l1Menu}
                </Menu>
            </Sider>
        );
    }
}

Side.propTypes = {
    sideCollapse: PropTypes.bool,
    darkTheme: PropTypes.bool,
};

const mapStateToProps = (state) => {
    return {
        sideCollapse: state.App.sideCollapse,
        darkTheme: state.App.darkTheme,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSideCollapse: bindActionCreators(appSideCollapseActionCreator, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Side);

