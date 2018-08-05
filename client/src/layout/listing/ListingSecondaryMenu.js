import React from 'react';
import {
  Button,
  Icon,
  Grid
} from 'semantic-ui-react';

const ListingSecondaryMenu = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={16} textAlign='right'>
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

export default ListingSecondaryMenu;
