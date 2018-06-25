import React from 'react';
import {
  Table,
  Form
} from 'semantic-ui-react';

import SettingsBaseForm from './SettingsBaseForm';
import SettingsHeader from './SettingsHeader';
import HorizontalHeaderCell from '../../../components/styled-components/HorizontalHeaderCell';

const PersonalInfoForm = () => (
  <SettingsBaseForm>
    <Form.Field>
      <label>Name</label>
      <Form.Input />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <Form.Input />
    </Form.Field>
  </SettingsBaseForm>
);

const PersonalInfoTable = () => (
  <Table basic='very' celled>
    <Table.Body>
      <Table.Row>
        <HorizontalHeaderCell>Name</HorizontalHeaderCell>
        <Table.Cell>Full name</Table.Cell>
      </Table.Row>
      <Table.Row>
        <HorizontalHeaderCell>Email</HorizontalHeaderCell>
        <Table.Cell>pickles@example.com</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

class PersonalInfoSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
    this.onToggleEdit = this.onToggleEdit.bind(this);
    this.onSaveSettings = this.onSaveSettings.bind(this);
  }
  onToggleEdit() {
    this.setState({ edit: !this.state.edit });
  }
  onSaveSettings() {
    this.setState({ edit: false });
  }
  render() {
    const { edit } = this.state;
    return (
      <React.Fragment>
        <SettingsHeader
          edit={edit}
          title='Personal Information'
          onToggleEdit={this.onToggleEdit}
          />
        {
          edit ? (
            <PersonalInfoForm onSave={this.onSaveSettings}/>
          ) : (
            <PersonalInfoTable/>
          )
        }
      </React.Fragment>
    )
  }
}

export default PersonalInfoSettings;
