import React, { Component } from 'react';
import {
  Grid,
  Image,
  Button,
  Header,
  Responsive
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LogInButton = ({style}) => (
  <Button as={Link} to='/login' primary fluid style={style}>
    Log In
  </Button>
);

const SignUpButton = () => (
  <Button as={Link} to='/signup' secondary fluid>
    Sign Up
  </Button>
);

class UserControl extends Component {
  render() {
    return (
      <Grid stackable>
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
          <Responsive as={Grid.Column} width={8} minWidth={768}>
            <LogInButton />
          </Responsive>
          <Responsive as={Grid.Column} width={8} minWidth={768}>
            <SignUpButton />
          </Responsive>
          <Responsive as={Grid.Column} width={8} maxWidth={767}>
            <LogInButton style={{marginBottom: '0.5em'}} />
            <SignUpButton />
          </Responsive>
        </Grid.Row>
      </Grid>
    );
  }
}

export default UserControl;
