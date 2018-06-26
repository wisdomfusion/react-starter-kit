import React from 'react';
import { connect } from 'react-redux';
import sessionService from '../../services/session.service';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AppHeader.css';
import * as sessionActions from '../../store/actions/session.actions';

import { Layout } from 'antd';
const { Header } = Layout;

class AppHeader extends React.Component {
    adminUser = sessionService.getUser();

    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(event) {
        event.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <div className="top-nav">
                    <div className="brand">Brand</div>
                    <div className="system-tray">
                        {this.adminUser
                            ? (<span className="user-name"><b>{this.adminUser.name}</b></span>)
                            : (<span className="user-name not-login">Login first</span>)
                        }
                        <span className="sign-out">
                            <a role="button" onClick={this.onLogout}>
                                <FontAwesomeIcon className="fa icon" icon="sign-out-alt"/>Logout
                            </a>
                        </span>
                    </div>
                </div>
            </Header>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(sessionActions.logout())
    };
};

export default connect(null, mapDispatchToProps)(AppHeader);