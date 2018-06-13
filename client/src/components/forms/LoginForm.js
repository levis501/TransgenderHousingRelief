import React from 'react';
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

const LoginForm = ({style}) => (
  <Form style={style}>
    <Header as='h1'>Sign in</Header>
    <Form.Field>
      <Grid style={labelGridStyle}>
        <Grid.Row>
          <Grid.Column width={8}>
            <label style={labelStyle}>Username</label>
          </Grid.Column>
          <Grid.Column width={8} textAlign='right'>
            <label>
              <Link to='/login/forgot-username'>Forgot Username?</Link>
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
              <Link to='/login/forgot-password'>Forgot Password?</Link>
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
        <Grid.Column width={8} floated='right' textAlign='right'>
          <Link to='/signup'>No account? Sign up here.</Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Form>
);

export default LoginForm;
