import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import rootReducer from './store/reducers';

const store = compose(applyMiddleware(ReduxThunk))(createStore)(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
    <Provider store={store}>
        <LocaleProvider locale={zh_CN}>
            <App />
        </LocaleProvider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
// registerServiceWorker();
