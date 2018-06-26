import React from 'react';
import {
  Form,
  Image,
  Button
} from 'semantic-ui-react';

import SettingsBaseForm from './components/SettingsBaseForm';
import { SettingsHeaderReadOnly } from './components/SettingsHeader';

import imgAvatar1 from '../../../../resources/img/avatars/avatar1.png';

const AvatarForm = () => (
  <SettingsBaseForm>
    <Form.Field>
      <Image circular size='medium'
        src={imgAvatar1}
        />
    </Form.Field>
    <Form.Field>
      <Button>Upload Image</Button>
    </Form.Field>
  </SettingsBaseForm>
);

class AvatarSettings extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SettingsHeaderReadOnly title='Avatar' />
        <AvatarForm onSave={this.onSaveSettings}/>
      </React.Fragment>
    )
  }
}

export default AvatarSettings;
