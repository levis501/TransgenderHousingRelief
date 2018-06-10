import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './layout/homepage/HomePage';
import SearchPage from './layout/search/SearchPage';
import ResourceLinksPage from './layout/resource-links/ResourceLinksPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/search-offered' component={SearchPage}/>
          <Route path='/legal' render={() => (<ResourceLinksPage filter='legal-help' title='Legal Resources' />)} />
          <Route path='/housing-resources' render={() => (<ResourceLinksPage filter='housing' title='Housing Resources' />)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
