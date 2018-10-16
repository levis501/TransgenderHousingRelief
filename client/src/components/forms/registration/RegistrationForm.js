import React from 'react';
import {
  Form,
  Input,
  Button,
  Grid,
  Message
} from 'semantic-ui-react';

import AvatarPicker from '../../user/AvatarPicker';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: false,
    }
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    var isEmailValid = /\S+@\S+\.\S+/.test(this.state.email);
    this.setState({emailError: !isEmailValid});
    // TODO: register the account
  }

  onChange(e, props) {
    this.setState({ email: props.value });
  }

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
                <Message negative hidden={!this.state.emailError}>
                  <Message.Header>Please supply a valid email address!</Message.Header>
                </Message>
                <Input type='text'
                  value={this.state.email}
                  error={this.state.emailError}
                  onChange={this.onChange}
                />
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
              <Button primary size='large'
                onClick={(e) => this.onSubmit(e)}
              >
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
