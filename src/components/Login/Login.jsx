import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import sessionService from '../../services/session.service';
import * as sessionActions from '../../store/actions/session.actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Form, Input, Button } from 'antd';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                name: '',
                password: ''
            },
            logining: false,
            error: null
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.logout();
    }

    onChange = event => {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;

        this.setState({ credentials: credentials });
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.onLogin(this.state.credentials);
    };

    render() {
        return sessionService.isAuthenticated()
            ? (<Redirect to="/" />)
            : (
                <div className="login-form-box">
                    <Form className="login-form" onSubmit={this.onSubmit}>
                        <h1>Login Form</h1>
                        <Form.Item>
                            <Input size="large"
                                   prefix={<FontAwesomeIcon icon="user" />}
                                   placeholder="Admin user name"
                                   name="name"
                                   value={this.state.credentials.name}
                                   onChange={this.onChange}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input size="large"
                                   prefix={<FontAwesomeIcon icon="lock" />}
                                   type="password"
                                   placeholder="password here"
                                   name="password"
                                   value={this.state.credentials.password}
                                   onChange={this.onChange}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large" htmlType="submit" className="login-form-submit" loading={this.props.logining}>登录</Button>
                        </Form.Item>
                        <p className="copyright">&copy;2018 copyright here</p>
                    </Form>
                </div>
            );
    }
}

const mapStateToProps = state => {
    return {
        logining: state.session.logining,
        error: state.session.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: credentials => dispatch(sessionActions.login(credentials)),
        logout:  () => dispatch(sessionActions.logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);