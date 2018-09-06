import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Link, withRouter } from 'react-router-dom';
import {
  Menu
} from 'semantic-ui-react';

import AccountSettings from './account-settings/AccountSettings';
import UserPostsList from './UserPostsList';

const ProfileSubpages = (props) => {
  const isLoggedInUser = props.isLoggedInUser === 'true';

  if (isLoggedInUser) {
    return (
      <ProfileSubpagesPrivate {...props} />
    );
  } else {
    return (
      <ProfileSubpagesPublic />
    );
  }
}

const ProfileSubpagesPublic = () => (
  <UserPostsList title='Active Listings' />
);

const menuItemNames = {
  MyListings: {
    name: 'My Listings',
    path: ''
  },
  AccountSettings: {
    name: 'Account Settings',
    path: 'settings'
  }
};

const ProfileSubpagesPrivate = (props) => {
  let renderSubpage = function(activeItem) {
    switch (activeItem) {
      case menuItemNames.AccountSettings.path: return (<AccountSettings/>);
      default: return (<UserPostsList/>);
    }
  }

  let activeItem;
  if (props.match.url.startsWith('/profile/settings')) {
    activeItem = menuItemNames.AccountSettings.path;
  } else {
    activeItem = menuItemNames.MyListings.path;
  }
  const basePath = '/profile/'
  return (
    <React.Fragment>
      <Menu tabular>
        <Menu.Item icon='list'
          as={Link}
          to={`${basePath}${menuItemNames.MyListings.path}`}
          name={menuItemNames.MyListings.name}
          active={activeItem === menuItemNames.MyListings.path}
          />
        <Menu.Item icon='setting'
          as={Link}
          to={`${basePath}${menuItemNames.AccountSettings.path}`}
          name={menuItemNames.AccountSettings.name}
          active={activeItem === menuItemNames.AccountSettings.path}
          />
      </Menu>
      {
        renderSubpage(activeItem)
      }
    </React.Fragment>
  );
}

ProfileSubpagesPrivate.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
}

export default withRouter(ProfileSubpages);
