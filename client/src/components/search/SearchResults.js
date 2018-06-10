import React from 'react';
import { Grid, Item, Label, Pagination, Header, Icon } from 'semantic-ui-react';

import SortBy from './SortBy';

const SearchResult = ({title, city, state, startDate, description, price, tags}) => (
  <Item>
    <Item.Content>
      <Item.Header as='a'>
        {title}
      </Item.Header>
      <Item.Meta>
        <span>{city}, {state}</span>
      </Item.Meta>
      <Item.Description>{description}</Item.Description>
      <Item.Extra>
        <Label basic size='large'>{price}</Label>
        <Label basic size='large'><Icon name='calendar alternate outline'/>{startDate}</Label>
        {
          tags ?
            tags.map(tag => (<Label key={tag} content={tag} />))
            : null
        }
      </Item.Extra>
    </Item.Content>
  </Item>
)

const SearchResults = () => (
  <Grid container>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Header>2 Results</Header>
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
