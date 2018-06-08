import React, { Component } from 'react';
import {
  Grid,
  Image,
  Button,
  Header
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class UserControl extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Link to='/profile'>
              <Header as='h3'>
                <Image src='http://via.placeholder.com/64x64'
                  avatar />
                User
              </Header>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Button as={Link} to='/login' primary fluid>
              Log In
            </Button>
          </Grid.Column>
          <Grid.Column width={8}>
            <Button as={Link} to='/signup' secondary fluid>
              Sign Up
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default UserControl;
