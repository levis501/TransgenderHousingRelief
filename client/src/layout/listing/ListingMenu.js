import React from 'react';
import {
  Button,
  Icon,
  Grid,
  Responsive
} from 'semantic-ui-react';

const ListingMenuMobile = () => (
  <Grid stackable>
    <Grid.Row>
      <Grid.Column width={8}>
        <Button fluid color='blue'>
          <Icon name='mail' /> Message
        </Button>
        <Button fluid color='pink'>
          <Icon name='bookmark' /> Save
        </Button>
      </Grid.Column>
      <Grid.Column width={8} textAlign='right'>
        <Button fluid negative>
          <Icon name='x' /> Delete Post
        </Button>
        <Button fluid basic negative>
          <Icon name='exclamation circle' /> Report Post
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

const ListingMenuDesktop = () => (
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

const ListingMenu = () => (
  <React.Fragment>
    <Responsive maxWidth={511}>
      <ListingMenuMobile />
    </Responsive>
    <Responsive minWidth={512}>
      <ListingMenuDesktop />
    </Responsive>
  </React.Fragment>
)

export default ListingMenu;
