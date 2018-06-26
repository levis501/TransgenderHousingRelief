import React from 'react';
import {
  Button,
  Modal,
  Header,
  Icon
} from 'semantic-ui-react';

import { SettingsHeaderReadOnly } from './components/SettingsHeader';

const AccountControlSettings = () => (
  <React.Fragment>
    <SettingsHeaderReadOnly title='Account Control' />
    <DeleteAccountButton />
  </React.Fragment>
)

class DeleteAccountButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  onConfirm() {
    console.log('Delete the account');
    this.close();
  }
  open() {
    this.setState({modalOpen: true});
  }
  close() {
    this.setState({modalOpen: false});
  }
  render() {
    const {modalOpen} = this.state;
    return (
      <Modal
        open={modalOpen}
        onOpen={this.open}
        onClose={this.close}
        trigger={
          <Button negative>Delete Account</Button>
        }
        basic size='small'>
        <Header content='Delete Account' />
        <Modal.Content>
          <p>
            Are you sure you want to delete your account? This action is irreversible.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='blue' onClick={this.close}>
            Cancel
          </Button>
          <Button basic color='red' inverted onClick={this.onConfirm}>
            <Icon name='warning sign' /> Delete My Account
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AccountControlSettings;
