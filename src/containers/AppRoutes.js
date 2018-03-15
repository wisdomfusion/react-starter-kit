import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// system pages
import NotFound from '../components/SystemPages/NotFound.js';
import Unauthoried from '../components/SystemPages/Unauthorized';
import LoginExpired from '../components/SystemPages/LoginExpired';
// login
import Login from '../components/Login/Login.js';
// modules
import Home from '../components/Home/Home';
import OrderList from '../components/Orders/OrderList';
import CourseList from '../components/Courses/CourseList';
import Profile from '../components/Profiles/Profile';
import StatCourseList from '../components/Statistics/StatCourseList';
import StatCourseDetails from '../components/Statistics/StatCourseDetails';

export default class AppRoutes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/notfound' component={NotFound} />
                    <Route path='/unauthoried' component={Unauthoried} />
                    <Route path='/login-expired' component={LoginExpired} />
                    <Route path='/order/list' component={OrderList} />
                    <Route path='/course/list' component={CourseList} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/stat/course/list' component={StatCourseList} />
                    <Route path='/stat/course/:id' component={StatCourseDetails} />
                    <Route path='/' exact component={Home} />
                    <Redirect path='*' to='/notfound' />
                </Switch>
            </BrowserRouter>
        );
    }
}
