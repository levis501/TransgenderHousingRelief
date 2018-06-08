import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './layout/homepage/HomePage';
import SearchPage from './layout/search/SearchPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/search' component={SearchPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
