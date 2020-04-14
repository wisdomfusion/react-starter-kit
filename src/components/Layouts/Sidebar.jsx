import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

export default class AppFooter extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo">
                    LOGO
                </div>
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">
                        <Icon type="home" theme="outlined" />
                        <span><Link to="/">HOME</Link></span>
                    </Menu.Item>
                </Menu>
                <div className="bottom-bar">
                    <span className="trigger" onClick={this.toggle}>
                        <Icon type={this.state.collapsed ? 'right-circle' : 'left-circle'} theme="outlined" />
                    </span>
                </div>
            </Sider>
        );
    }
}