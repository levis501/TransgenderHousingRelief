import React, { Component } from 'react';
import {
  Grid,
  Button,
  Responsive,
  Icon,
  Label
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import UserInfo from './UserInfo';

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

const UserInfoWithMenu = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <UserInfo/>
      </Grid.Column>
      <Grid.Column width={8} textAlign='right'>
        <Label as={Link} to='/messages'>
          <Icon name='mail' /> 2
        </Label>
        <Label as={Link} to='/notifications'>
          <Icon name='exclamation circle' /> 4
        </Label>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const SessionMenu = () => (
  <React.Fragment>
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
  </React.Fragment>
);

class UserControl extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column>
            <UserInfoWithMenu />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <SessionMenu />
        </Grid.Row>
      </Grid>
    );
  }
}

export default UserControl;
