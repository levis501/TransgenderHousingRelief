import React, { Component } from 'react';
import {
  Grid,
  Image,
  Button,
  Header
} from 'semantic-ui-react';

class UserControl extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3'>
              <Image src='http://via.placeholder.com/64x64'
                avatar />
              User
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Button primary fluid>
              Log In
            </Button>
          </Grid.Column>
          <Grid.Column width={8}>
            <Button secondary fluid>
              Sign Up
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default UserControl;
