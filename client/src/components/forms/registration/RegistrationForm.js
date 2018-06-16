import React from 'react';
import {
  Form,
  Input,
  Button,
  Grid
} from 'semantic-ui-react';

import AvatarPicker from '../../user/AvatarPicker';

class RegistrationForm extends React.Component {
  render() {
    return (
      <Form>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>First name</label>
                  <Input type='text'/>
                </Form.Field>
                <Form.Field>
                  <label>Last name</label>
                  <Input type='text'/>
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <label>Username</label>
                <Input type='text'/>
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Input type='text'/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Input type='password'/>
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <Input type='password'/>
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={8}>
              <AvatarPicker />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center'>
              <Button primary size='large'>
                Register
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

export default RegistrationForm;
