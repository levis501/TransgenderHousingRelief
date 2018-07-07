import React from 'react';
import {
  Table,
  Form,
  Checkbox,
  Icon
} from 'semantic-ui-react';

import SettingsBaseForm from './components/SettingsBaseForm';
import SettingsHeader from './components/SettingsHeader';
import HorizontalHeaderCell from '../../../../components/styled-components/HorizontalHeaderCell';

const PrivacyForm = () => (
  <SettingsBaseForm>
    <Form.Field>
      <Checkbox label='Opt-in to data collection by third parties' />
    </Form.Field>
  </SettingsBaseForm>
);

const PrivacyTable = () => (
  <Table basic='very' celled>
    <Table.Body>
      <Table.Row>
        <HorizontalHeaderCell>Opt-in to data collection by third parties</HorizontalHeaderCell>
        <Table.Cell><Icon name='x'/> No</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

class PrivacySettings extends React.Component {
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
          title='Privacy Settings'
          onToggleEdit={this.onToggleEdit}
          />
        {
          edit ? (
            <PrivacyForm onSave={this.onSaveSettings}/>
          ) : (
            <PrivacyTable/>
          )
        }
      </React.Fragment>
    )
  }
}

export default PrivacySettings;
