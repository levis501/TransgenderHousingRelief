import React from 'react';
import {
  Button,
  Form,
  Header
} from 'semantic-ui-react';

const ForgotUsernameForm = ({style}) => (
  <Form style={style}>
    <Header as='h1'>Recover Username</Header>
    <Form.Field>
      <label>Email</label>
      <input />
    </Form.Field>
    <Button primary type='submit'>
      Send
    </Button>
  </Form>
);

export default ForgotUsernameForm;
