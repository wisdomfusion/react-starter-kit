import React, { Component } from 'react';
import Routes from './routes';

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
library.add(
    faUser, faLock, faHome, faSignOutAlt,
    faArrowAltCircleLeft, faArrowAltCircleRight
);

export default class App extends Component {
    render() {
        return (
            <Routes />
        );
    }
}