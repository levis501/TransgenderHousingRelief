import React, { Component } from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import Search from '../../components/forms/search/Search';
import SearchResults from '../../components/forms/search/SearchResults';

class SearchPage extends Component {
  render() {
    return (
      <PageLayout>
        <Container>
          <Header as='h1'>Search Offered</Header>
          <Search />
          <SearchResults />
        </Container>
      </PageLayout>
    );
  }
}

export default SearchPage;
