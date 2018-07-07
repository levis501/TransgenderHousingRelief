import React from 'react';
import {
  Icon,
  Button
} from 'semantic-ui-react';

const ListingPrimaryMenu = () => (
  <React.Fragment>
    <Button color='blue'>
      <Icon name='mail' /> Message
    </Button>
    <Button color='pink'>
      <Icon name='bookmark' /> Save
    </Button>
  </React.Fragment>
);

export default ListingPrimaryMenu;
