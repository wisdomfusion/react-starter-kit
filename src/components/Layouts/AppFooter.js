import React from 'react';
import { Layout } from 'antd';

import './AppFooter';

const { Footer } = Layout;

export default class AppFooter extends React.Component {
    render() {
        return (
            <Footer>&copy; 2018 copyright</Footer>
        );
    }
}