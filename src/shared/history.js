import { createBrowserHistory } from 'history';
import config from '../config';

const history = createBrowserHistory({
    basename: config.app.basename
});

export default history;