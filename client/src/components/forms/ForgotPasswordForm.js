import React from 'react';
import {
  Button,
  Form,
  Header
} from 'semantic-ui-react';

const ForgotPasswordForm = ({style}) => (
  <Form style={style}>
    <Header as='h1'>Recover Password</Header>
    <Form.Field>
      <label>Email</label>
      <input />
    </Form.Field>
    <Button primary type='submit'>
      Send
    </Button>
  </Form>
);

export default ForgotPasswordForm;
