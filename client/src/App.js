import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './layout/homepage/HomePage';
import SearchOfferedPage from './layout/search/SearchOfferedPage';
import SearchWantedPage from './layout/search/SearchWantedPage';
import SubmitAdPage from './layout/submitAd/SubmitAdPage';
import SponsorsPage from './layout/links/SponsorsPage';
import HousingLinksPage from './layout/links/HousingLinksPage';
import LegalLinksPage from './layout/links/LegalLinksPage';
import FaqPage from './layout/faq/FaqPage';
import SafetyTipsPage from './layout/faq/SafetyTipsPage';
import LoginPage from './layout/login/LoginPage';
import MessagesPage from './layout/messages/MessagesPage';
import WriteMessagePage from './layout/messages/write/WriteMessagePage';
import ForgotUsernamePage from './layout/login/ForgotUsernamePage';
import ForgotPasswordPage from './layout/login/ForgotPasswordPage';
import RegistrationPage from './layout/register/RegistrationPage';
import AgeVerificationPage from './layout/register/AgeVerificationPage';
import FeedbackPage from './layout/feedback/FeedbackPage';
import ContactPage from './layout/contact/ContactPage';
import TermsOfServicePage from './layout/legal/informational/TermsOfServicePage';
import PrivacyPolicyPage from './layout/legal/informational/PrivacyPolicyPage';
import DisclaimerPage from './layout/legal/informational/DisclaimerPage';
import TermsOfServiceAgreementPage from './layout/legal/agreement/TermsOfServiceAgreementPage';
import PrivacyPolicyAgreementPage from './layout/legal/agreement/PrivacyPolicyAgreementPage';
import DisclaimerAgreementPage from './layout/legal/agreement/DisclaimerAgreementPage';
import NotFoundPage from './layout/NotFoundPage';
import ProfilePage from './layout/profile/ProfilePage';
import ListingPage from './layout/listing/ListingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/search-offered' component={SearchOfferedPage}/>
          <Route path='/search-wanted' component={SearchWantedPage}/>
          <Route path='/listing/:id' component={ListingPage}/>
          <Route path='/submit' component={SubmitAdPage}/>
          <Route path='/faq' component={FaqPage} />
          <Route path='/sponsors' component={SponsorsPage} />
          <Route path='/safety-tips' component={SafetyTipsPage} />

          <Route path='/links/housing/:sort?/:location?' component={HousingLinksPage} />
          <Route path='/links/legal/:sort?/:tags?' component={LegalLinksPage} />

          <Route path='/profile/settings/:submenu?' component={ProfilePage}/>
          <Route path='/profile' component={ProfilePage}/>
          <Route path='/message/inbox' component={MessagesPage}/>
          <Route path='/messages/sent' component={MessagesPage}/>
          <Route path='/messages/drafts' component={MessagesPage}/>
          <Route path='/messages/trash' component={MessagesPage}/>
          <Route path='/messages/write' component={WriteMessagePage}/>
          <Route path='/messages' component={MessagesPage}/>

          <Route path='/login/forgot-username' component={ForgotUsernamePage} />
          <Route path='/login/forgot-password' component={ForgotPasswordPage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/signup/tos' component={TermsOfServiceAgreementPage}/>
          <Route path='/signup/disclaimer' component={DisclaimerAgreementPage}/>
          <Route path='/signup/privacypolicy' component={PrivacyPolicyAgreementPage}/>
          <Route path='/signup/age' component={AgeVerificationPage}/>
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
