import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Label,
  Icon
} from 'semantic-ui-react';

const UserActionMenu = () => {
  const isLoggedInUser = true;
  return (
    <Menu vertical>
      {
        isLoggedInUser ? (
          <MenuItemsPrivate />
        ) : (
          <MenuItemsPublic username='someone' />
        )
      }

    </Menu>
  );
}

const MenuItemsPrivate = () => (
  <React.Fragment>
    <Menu.Item as={Link} to='/account/messages'>
      <Label color='teal'>2</Label>
      <span>
        <Icon name='mail' /> Messages
      </span>
    </Menu.Item>
    <Menu.Item as={Link} to='/account/notifications'>
      <Label color='teal'>1</Label>
      <span>
        <Icon name='exclamation circle' /> Notifications
      </span>
    </Menu.Item>
    <Menu.Item as={Link} to='/account/settings'>
      <span>
        <Icon name='setting' /> Account Settings
      </span>
    </Menu.Item>
  </React.Fragment>
)

const MenuItemsPublic = ({username}) => (
  <React.Fragment>
    <Menu.Item as={Link} to={`/message/${username}`}>
      <span>
        <Icon name='mail' /> Send a Message
      </span>
    </Menu.Item>
  </React.Fragment>
)

export default UserActionMenu;
