import React from 'react';
import {
  Button,
  Icon,
  Grid
} from 'semantic-ui-react';

const ListingMenu = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <Button color='blue'>
          <Icon name='mail' /> Message
        </Button>
        <Button color='pink'>
          <Icon name='bookmark' /> Save
        </Button>
      </Grid.Column>
      <Grid.Column width={8} textAlign='right'>
        <Button negative>
          <Icon name='x' /> Delete Post
        </Button>
        <Button basic negative>
          <Icon name='exclamation circle' /> Report Post
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default ListingMenu;
