import React, { Component } from 'react';
import {
  Container
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import Search from '../../components/search/Search';
import SearchResults from '../../components/search/SearchResults';

class SearchPage extends Component {
  render() {
    return (
      <PageLayout>
        <Container>
          <Search />
          <SearchResults />
        </Container>
      </PageLayout>
    );
  }
}

export default SearchPage;
