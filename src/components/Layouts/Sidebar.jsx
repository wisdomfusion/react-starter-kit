import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Sidebar.css';

import { Layout, Menu } from 'antd';
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
                        <FontAwesomeIcon className="fa icon" icon="home" />
                        <span><Link to="/">HOME</Link></span>
                    </Menu.Item>
                </Menu>
                <div className="bottom-bar">
                    <span className="trigger" onClick={this.toggle}>
                        <FontAwesomeIcon className="fa icon" icon={this.state.collapsed ? 'arrow-alt-circle-right' : 'arrow-alt-circle-left'} />
                    </span>
                </div>
            </Sider>
        );
    }
}