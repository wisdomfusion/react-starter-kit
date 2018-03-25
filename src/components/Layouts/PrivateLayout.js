import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import './PrivateLayout.css';

import Sidebar from './Sidebar';

import SessionService from '../../services/session.service';

import { Layout } from 'antd';
const { Content } = Layout;

export default class PrivateLayout extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route {...rest} render={ props => SessionService.isAuthenticated()
                ? (
                    <Layout style={{ height: '100%' }}>
                        <Sidebar />
                        <Layout>
                            <AppHeader />
                            <Content className="content-box">
                                <Component {...props} />
                            </Content>
                            <AppFooter />
                        </Layout>
                    </Layout>
                )
                : (<Redirect to={{ pathname: '/login', state: { from: props.location} }} />)}
            />
        );
    }
}