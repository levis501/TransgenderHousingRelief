import React from 'react';
import {
  Container,
  Header,
  Grid
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import MessagesMenu from './MessagesMenu';

import Inbox from './Inbox';

const menuItemNames = {
  Inbox: {
    name: 'Inbox',
    path: 'inbox',
    icon: 'inbox'
  },
  Sent: {
    name: 'Sent',
    path: 'sent',
    icon: 'send'
  },
  Drafts: {
    name: 'Drafts',
    path: 'drafts',
    icon: 'pencil'
  },
  Trash: {
    name: 'Trash',
    path: 'trash',
    icon: 'trash'
  }
}

const menuItemNamesArray = Object.values(menuItemNames);

class MessagesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
    this.renderSubpage = this.renderSubpage.bind(this);
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
    this.onClickTab = this.onClickTab.bind(this);
  }
  activeItemFromPath(props) {
    const {url} = props.match;
    if (url.startsWith('/messages/sent')) {
      return menuItemNames.Sent.path;
    } else if (url.startsWith('/messages/drafts')) {
      return menuItemNames.Drafts.path;
    } else if (url.startsWith('/messages/trash')) {
      return menuItemNames.Trash.path;
    }
    return menuItemNames.Inbox.path;
  }
  openMessage(message) {
    this.setState({message});
  }
  closeMessage() {
    this.setState({message: null});
  }
  onClickTab() {
    this.closeMessage();
  }
  renderSubpage(activeItem) {
    return (
      <Inbox
        inboxType={activeItem}
        message={this.state.message}
        onOpenMessage={this.openMessage}
        onCloseMessage={this.closeMessage}
        />
    );
  }
  render() {
    let activeItem = this.activeItemFromPath(this.props);
    return (
      <PageLayout>
        <Container>
          <Header as='h1'>Messages</Header>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column tablet={5} computer={4}>
                <MessagesMenu
                  menuItemNames={menuItemNamesArray}
                  activeItem={activeItem}
                  onClick={this.onClickTab}
                  />
              </Grid.Column>
              <Grid.Column tablet={11} computer={12}>
                {this.renderSubpage(activeItem)}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </PageLayout>
    );
  }
}

export default MessagesPage;
