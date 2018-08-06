import React from 'react';
import {
  Grid,
  Item,
  Header
} from 'semantic-ui-react';

import Pagination from '../../Pagination';
import SortBy from './SortBy';
import SearchResult from './SearchResult';

const SearchResults = ({showResultsNumber}) => (
  <Grid container>
    <Grid.Row columns={2}>
      <Grid.Column>
        {
          showResultsNumber ? (
            <Header>2 Results</Header>
          ) : null
        }
      </Grid.Column>
      <Grid.Column mobile={16} textAlign='right'>
        <SortBy />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Item.Group divided>
          <SearchResult
            title='Apartment Room'
            startDate='6/1/19'
            city='San Mateo'
            state='California'
            description='Single bedroom available'
            price='$400'
            tags={['Sublet', 'Smoke-free', 'Pet-free']}
           />
         <SearchResult
           title='Apartment Room'
           startDate='6/1/19'
           city='San Mateo'
           state='California'
           description='Single bedroom available'
           price='$400'
           tags={['Sublet', 'Smoke-free', 'Pet-free']}
          />
        </Item.Group>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column textAlign='center'>
        <Pagination
          defaultActivePage={1}
          totalPages={3}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default SearchResults;
