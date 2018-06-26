import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  PersonalInfoSettings,
  PasswordSettings,
  AvatarSettings,
  EmailSettings,
  PrivacySettings,
  AccountControlSettings
} from './forms';

import AccountSettingsMenu from './AccountSettingsMenu';

const menuItemNames = {
  PersonalInformation: {
    name: 'Personal Information',
    path: 'personalinformation'
  },
  Password: {
    name: 'Password',
    path: 'password'
  },
  Avatar: {
    name: 'Avatar',
    path: 'avatar'
  },
  Emails: {
    name: 'Emails',
    path: 'emails'
  },
  Privacy: {
    name: 'Privacy',
    path: 'privacy'
  },
  AccountControl: {
    name: 'Account Control',
    path: 'accountcontrol'
  }
};

const menuItemNamesArray = Object.values(menuItemNames);

class AccountSettings extends React.Component {
  renderSubpage(activeItem) {
    switch(activeItem) {
      case menuItemNames.Password.path: return (<PasswordSettings />);
      case menuItemNames.Avatar.path: return (<AvatarSettings />);
      case menuItemNames.Emails.path: return (<EmailSettings />);
      case menuItemNames.Privacy.path: return (<PrivacySettings />);
      case menuItemNames.AccountControl.path: return (<AccountControlSettings />);
      case menuItemNames.PersonalInformation.path:
      default:
        return (<PersonalInfoSettings />);
    }
  }
  render() {
    let activeItem = menuItemNamesArray[0].path;
    const { submenu } = this.props.match.params;
    if (submenu) {
      if (menuItemNamesArray.find(item => (submenu === item.path))) {
        activeItem = submenu;
      }
    }
    return (
      <React.Fragment>
        <AccountSettingsMenu
          basePath='/profile/settings'
          items={menuItemNamesArray}
          activeItem={activeItem}
          />
        { this.renderSubpage(activeItem) }
      </React.Fragment>
    );
  }
}

export default withRouter(AccountSettings);
