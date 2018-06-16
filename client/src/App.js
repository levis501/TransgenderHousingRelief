import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './layout/homepage/HomePage';
import SearchPage from './layout/search/SearchPage';
import FeedbackPage from './layout/feedback/FeedbackPage';
import LoginPage from './layout/login/LoginPage';
import ForgotUsernamePage from './layout/login/ForgotUsernamePage';
import ForgotPasswordPage from './layout/login/ForgotPasswordPage';
import RegistrationPage from './layout/register/RegistrationPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/search-offered' component={SearchPage}/>
          <Route path='/feedback' component={FeedbackPage}/>
          <Route path='/login/forgot-username' component={ForgotUsernamePage}/>
          <Route path='/login/forgot-password' component={ForgotPasswordPage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/signup' component={RegistrationPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
