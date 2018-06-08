import React from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';

import PriceRangeSelect from './PriceRangeSelect';
import LocationSelect from './LocationSelect';
import DateRangeSelect from './DateRangeSelect';
import TagSelect from './TagSelect';
import TextSearch from './TextSearch';

const Search = () => (
  <Form>
    <Grid stackable>
      <Grid.Row style={{paddingBottom:'0'}}>
        <Grid.Column width={8}>
          <LocationSelect />
          <Form.Group>
            <PriceRangeSelect />
          </Form.Group>
          <Form.Group>
            <DateRangeSelect />
          </Form.Group>
          <Form.Group>
            <TextSearch />
          </Form.Group>
        </Grid.Column>
        <Grid.Column width={8}>
          <TagSelect />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={2}>
          <Form.Field control={Button} color='blue' size='large'>Search</Form.Field>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Form>
)

export default Search;
