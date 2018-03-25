import axios from 'axios';
import config from '../shared/config';
import history from '../shared/history';

class SessionService {
    login = credentials => {
        // const url = `${config.api.url_prefix}/login`;
        // return axios.post(url, credentials);
    };

    logout = () => {
        if (sessionStorage.getItem('admin_user') != null) {
            sessionStorage.removeItem('admin_user');
        }

        history.push('/login');
    };

    getUser = () => {
        return !!sessionStorage.getItem('admin_user')
            ? JSON.parse(sessionStorage.getItem('admin_user'))
            : null;
    };

    isAuthenticated = () => {
        return !!sessionStorage.getItem('admin_user');
    };
}

export default new SessionService();