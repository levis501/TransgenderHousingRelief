import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './layout/homepage/HomePage';
import SearchPage from './layout/search/SearchPage';
import SubmitAdPage from './layout/submitAd/SubmitAdPage';
import HousingResourcesPage from './layout/resource-links/HousingResourcesPage';
import LegalResourcesPage from './layout/resource-links/LegalResourcesPage';
import FaqPage from './layout/faq/FaqPage';
import LoginPage from './layout/login/LoginPage';
import ForgotUsernamePage from './layout/login/ForgotUsernamePage';
import ForgotPasswordPage from './layout/login/ForgotPasswordPage';
import RegistrationPage from './layout/register/RegistrationPage';
import FeedbackPage from './layout/feedback/FeedbackPage';
import ContactPage from './layout/contact/ContactPage';
import TermsOfServicePage from './layout/legal/TermsOfServicePage';
import PrivacyPolicyPage from './layout/legal/PrivacyPolicyPage';
import DisclaimerPage from './layout/legal/DisclaimerPage';
import NotFoundPage from './layout/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/search-offered' component={SearchPage}/>
          <Route path='/submit' component={SubmitAdPage}/>
          <Route path='/faq' component={FaqPage}/>
          <Route path='/housing-resources' component={HousingResourcesPage}/>
          <Route path='/legal' component={LegalResourcesPage}/>
          <Route path='/login/forgot-username' component={ForgotUsernamePage}/>
          <Route path='/login/forgot-password' component={ForgotPasswordPage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/signup' component={RegistrationPage}/>
          <Route path='/feedback' component={FeedbackPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/tos' component={TermsOfServicePage}/>
          <Route path='/disclaimer' component={DisclaimerPage}/>
          <Route path='/privacy' component={PrivacyPolicyPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
