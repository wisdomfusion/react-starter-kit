import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT
} from '../actions/types';

const user = JSON.parse(sessionStorage.getItem('admin_user'));

const initialState = {
    adminUser: {
        id:    user ? user.id    : null,
        name:  user ? user.name  : null,
        token: user ? user.token : null,
    },
    logining: false,
    error: null
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                logining: true
            };
        case LOGIN_SUCCESS:
            return {
                partnerUser: {
                    id:    action.userData.id,
                    name:  action.userData.name,
                    token: action.userData.token,
                },
                logining: false,
                error:    null
            };
        case LOGIN_FAILURE:
            return {
                adminUser: null,
                logining: false,
                error: action.error
            };
        case LOGOUT:
            return {
                adminUser: null,
                logining: false,
                error: null
            };
        default:
            return state;
    }
};

export default sessionReducer;