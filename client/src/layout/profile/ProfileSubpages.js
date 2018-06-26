import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Header,
  Menu
} from 'semantic-ui-react';

import SearchResults from '../../components/forms/search/SearchResults';
import AccountSettings from './account-settings/AccountSettings';

const UserPostsList = ({title}) => (
  <React.Fragment>
    {
      title ? (
        <Header as='h2'>{title}</Header>
      ) : null
    }
    <SearchResults/>
  </React.Fragment>
)

const ProfileSubpages = (props) => {
  const isLoggedInUser = true;

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

const ProfileSubpagesPrivate = (props)=> {
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

export default withRouter(ProfileSubpages);
