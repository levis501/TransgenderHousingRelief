import React from 'react';
import {
  Button,
  Icon
} from 'semantic-ui-react';

const ListingSecondaryMenu = () => (
  <React.Fragment>
    <Button basic negative>
      <Icon name='exclamation circle' /> Report Post
    </Button>
    <Button negative>
      <Icon name='x' /> Delete Post
    </Button>
  </React.Fragment>
)

export default ListingSecondaryMenu;
