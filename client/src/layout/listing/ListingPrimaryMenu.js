import React from 'react';
import {
  Icon,
  Button,
  Grid
} from 'semantic-ui-react';

const ListingPrimaryMenu = ({style}) => (
  <Grid style={style}>
    <Grid.Row>
      <Grid.Column width={16} textAlign='left'>
        <Button color='blue'>
          <Icon name='mail' /> Message
        </Button>
        <Button color='pink'>
          <Icon name='bookmark' /> Save
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ListingPrimaryMenu;
