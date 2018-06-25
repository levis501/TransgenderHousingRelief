import React from 'react';
import { Grid, Item, Pagination, Header, Icon } from 'semantic-ui-react';

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
          ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
          firstItem={{ content: <Icon name='angle double left' />, icon: true }}
          lastItem={{ content: <Icon name='angle double right' />, icon: true }}
          prevItem={{ content: <Icon name='angle left' />, icon: true }}
          nextItem={{ content: <Icon name='angle right' />, icon: true }}
          totalPages={3}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default SearchResults;
