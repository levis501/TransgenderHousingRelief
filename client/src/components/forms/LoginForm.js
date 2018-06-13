import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Header,
  Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const labelGridStyle = {
  paddingBottom: '0.25em'
};

const labelStyle = {
  fontWeight: 'bold'
}

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameEmailSent: false,
      passwordRecoveryEmailSent: false
    }

    this.onClickForgotUsername = this.onClickForgotUsername.bind(this);
    this.onClickForgotPassword = this.onClickForgotPassword.bind(this);
  }
  onClickForgotUsername() {
    this.setState({ usernameEmailSent: true });
  }
  onClickForgotPassword() {
    this.setState({ passwordRecoveryEmailSent: true });
  }
  render() {
    return (
      <Form style={this.props.style}>
        <Header as='h1'>Sign in</Header>
        <Form.Field>
          <Grid style={labelGridStyle}>
            <Grid.Row>
              <Grid.Column width={8}>
                <label style={labelStyle}>Username</label>
              </Grid.Column>
              <Grid.Column width={8} textAlign='right'>
                <label>
                  {
                    this.state.usernameEmailSent ?
                        <span>Check your email!</span>
                      : <a href='#' onClick={this.onClickForgotUsername}>Forgot Username?</a>
                  }
                </label>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <input />
        </Form.Field>
        <Form.Field>
          <Grid style={labelGridStyle}>
            <Grid.Row>
              <Grid.Column width={8}>
                <label style={labelStyle}>Password</label>
              </Grid.Column>
              <Grid.Column width={8} textAlign='right'>
                <label>
                  {
                    this.state.passwordRecoveryEmailSent ?
                        <span>Check your email!</span>
                      : <a href='#' onClick={this.onClickForgotPassword}>Forgot Password?</a>
                  }
                </label>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <input type='password' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Keep me signed in' />
        </Form.Field>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Button icon primary type='submit'
                labelPosition='right'>
                Sign in
                <Icon name='right arrow'/>
              </Button>
            </Grid.Column>
            <Grid.Column width={8} floated='right'>
              <Link to='/signup'>No account? Sign up here.</Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

export default LoginForm;
