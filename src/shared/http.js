import React from 'react';
import axios from 'axios';
import config from 'shared/config';

export default class HttpClient {
    httpClient = axios.create({
        baseURL: config.api.url_prefix
    });

    // GET
    get(url, options) {
        this.httpClient.get(url, options)
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
        return response.data;
    }

    onError(error) {
        //
    }
}
