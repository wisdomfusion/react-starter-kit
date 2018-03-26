import createHistory from 'history/createBrowserHistory';
import config from './config';

const history = createHistory({
    basename: config.app.basename
});

export default history;