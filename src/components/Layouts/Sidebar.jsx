import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

import { faHome, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                        <FontAwesomeIcon icon={faHome} />
                        <span><Link to="/">HOME</Link></span>
                    </Menu.Item>
                </Menu>
                <div className="bottom-bar">
                    <span className="trigger" onClick={this.toggle}>
                        <FontAwesomeIcon icon={this.state.collapsed ? faChevronCircleRight : faChevronCircleLeft} />
                    </span>
                </div>
            </Sider>
        );
    }
}