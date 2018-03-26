const config = {
    app: {
        domain: process.env.REACT_APP_DOMAIN,
        basename: process.env.REACT_APP_BASENAME
    },
    api: {
        url_prefix: process.env.REACT_APP_URL_PREFIX
    },
    data: {
        pagination: {
            per_page: 20
        }
    }
};

export default config;