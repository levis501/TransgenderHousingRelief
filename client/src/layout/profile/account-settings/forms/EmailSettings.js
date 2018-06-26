import React from 'react';
import {
  Table,
  Form,
  Checkbox,
  Icon,
  Header
} from 'semantic-ui-react';

import SettingsBaseForm from './components/SettingsBaseForm';
import SettingsHeader from './components/SettingsHeader';
import HorizontalHeaderCell from '../../../../components/styled-components/HorizontalHeaderCell';

const EmailForm = () => (
  <React.Fragment>

    <Header as='h4'>Receive emails for:</Header>
  <SettingsBaseForm>
    <Form.Field>
      <Checkbox label='Receiving Private Messages' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='Notifications' />
    </Form.Field>
  </SettingsBaseForm>
  </React.Fragment>
);

const EmailTable = () => (
  <React.Fragment>
    <Header as='h4'>Receive emails for:</Header>
    <Table basic='very' celled>
      <Table.Body>
        <Table.Row>
          <HorizontalHeaderCell>Messages</HorizontalHeaderCell>
          <Table.Cell><Icon name='check'/> Yes</Table.Cell>
        </Table.Row>
        <Table.Row>
          <HorizontalHeaderCell>Notifications</HorizontalHeaderCell>
          <Table.Cell><Icon name='x'/> No</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </React.Fragment>
);

class EmailSettings extends React.Component {
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
          title='Email Settings'
          onToggleEdit={this.onToggleEdit}
          />
        {
          edit ? (
            <EmailForm onSave={this.onSaveSettings}/>
          ) : (
            <EmailTable/>
          )
        }
      </React.Fragment>
    )
  }
}

export default EmailSettings;
