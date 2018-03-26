# React Start Kit

## packages installed

- [react](https://reactjs.org/)
- [antd](https://ant.design/) for UI Components
- [react-router-dom](https://reacttraining.com/react-router/) for App Routing
- [react-redux](https://redux.js.org/) for state management
- [axios](https://github.com/axios/axios) for Http Requests
- [history](https://github.com/ReactTraining/history) for navigation
- [prop-types](https://github.com/facebook/prop-types) for runtime type checking

## quick start

dotenv:

```
cat .env.development.local
DOMAIN=http://www.example.test.com
BASENAME=

PUBLIC_URL=$BASENAME
REACT_APP_DOMAIN=$DOMAIN
REACT_APP_URL_PREFIX=$DOMAIN/basename/api
REACT_APP_BASENAME=$BASENAME
```

start up:

```
  git clone https://github.com/WisdomFusion/react-starter-kit.git
  cd react-starter-kit/
  yarn install
  yarn start
```

project structure:

- assets/
- components/
- core/
  - http.js
- services/
- shared/
  - config.js
  - utils.js
  - history.js
- store/
  - actions/
    - types.js
    - *.actions.js
  - reducers/
    - index.js
    - *.reduser.js
- routes.js