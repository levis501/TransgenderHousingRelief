import React from 'react';
import {
  Form,
  Input
} from 'semantic-ui-react';

import SettingsBaseForm from './components/SettingsBaseForm';
import { SettingsHeaderReadOnly } from './components/SettingsHeader';

const PasswordForm = () => (
  <SettingsBaseForm>
    <Form.Field>
      <label>Current Password</label>
      <Input type='password' />
    </Form.Field>
    <Form.Field>
      <label>New Password</label>
      <Input type='password' />
    </Form.Field>
    <Form.Field>
      <label>Confirm New Password</label>
      <Input type='password' />
    </Form.Field>
  </SettingsBaseForm>
);

class PasswordSettings extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SettingsHeaderReadOnly title='Password' />
        <PasswordForm onSave={this.onSaveSettings}/>
      </React.Fragment>
    )
  }
}

export default PasswordSettings;
