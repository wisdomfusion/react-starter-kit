import React from 'react';
import axios from 'axios';
import config from 'shared/config';

class HttpClient {
    constructor() {
        httpClient = axios.create({
            baseURL: config.api.url_prefix
        });

        httpClient.interceptors.request.use(
            config => {
                const user = sessionService.getUser();
                const token = user ? user.token : null;
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                } else {
                    sessionService.logout();
                }
                return config;
            },
            error => Promise.reject(error)
        );

        httpClient.interceptors.response.use(
            res => {
                let token = res.headers['authorization'].split(' ')[1];
                sessionService.updateToken(token);

                return res;
            },
            err => {
                const error = err.response;
                if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
                }
                return Promise.reject(error);
            }
        );

        this.httpClient = httpClient;
    }

    // GET
    get(url, params) {
        this.httpClient.get(url, { params: this.prepareParams(params) })
            .then(this.onSuccess)
            .catch(this.onError);
    }

    // POST
    post(url, data, options) {
        this.httpClient.post(url, data, options)
            .then(this.onSuccess)
            .catch(this.onError);
    }

    // PUT
    put(url, data, options) {
        this.httpClient.post(url, data, options)
            .then(this.onSuccess)
            .catch(this.onError);
    }

    // PATCH
    patch(url, data, options) {
        this.httpClient.patch(url, data, options)
            .then(this.onSuccess)
            .catch(this.onError);
    }

    // DELETE
    delete(url, options) {
        this.httpClient.delete(url, options)
            .then(this.onSuccess)
            .catch(this.onError);
    }

    onSuccess(response) {
        if (response.data.status === 401) {
            history.push('/login');
        }
        return response.data;
    }

    onError(error) {
        if (error.response) {
            console.error('Status: ',  error.response.status);
            console.error('Date: ',    error.response.data);
            console.error('Headers: ', error.response.headers);
        } else {
            console.error('Error Message: ', error.message);
        }
    }

    prepareParams(params) {
        let newParams = {};

        if (params) {
            for (let key in params) {

                // GET 请求的一些优化，空的默认的都不传
                if (params[key] === '' || params[key] === null) {
                    continue;
                }
                // if (key === 'page' && params[key] === 1) {
                //     continue;
                // }
                // if (key === 'per_page' && params[key] === config.data.pagination.per_page) {
                //     continue;
                // }

                newParams[key] = params[key];
            }
        }

        return newParams;
    }
}

export default new HttpClient();