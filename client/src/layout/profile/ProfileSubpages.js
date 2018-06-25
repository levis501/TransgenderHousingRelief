import React from 'react';
import {
  Header,
  Menu
} from 'semantic-ui-react';

import SearchResults from '../../components/forms/search/SearchResults';
import AccountSettings from './AccountSettings';

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

const ProfileSubpages = () => {
  const isLoggedInUser = true;

  if (isLoggedInUser) {
    return (
      <ProfileSubpagesPrivate/>
    );
  } else {
    return (
      <ProfileSubpagesPublic/>
    );
  }
}

const ProfileSubpagesPublic = () => (
  <UserPostsList title='Active Listings' />
);

class ProfileSubpagesPrivate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: ''
    }
    this.onTabClick = this.onTabClick.bind(this);
  }
  onTabClick(e,{name}) {
    this.setState({ activeTab: name });
  }
  renderActiveTab(activeTab) {
    if (activeTab === 'Account Settings') {
      return (
        <AccountSettings/>
      );
    }
    return (
      <UserPostsList/>
    );
  }
  render() {
    const {activeTab} = this.state;
    return (
      <React.Fragment>
        <Menu tabular>
          <Menu.Item name='My Listings' icon='list'
            active={activeTab === 'My Listings' || !activeTab}
            onClick={this.onTabClick}
            />
          <Menu.Item name='Account Settings' icon='setting'
            active={activeTab === 'Account Settings'}
            onClick={this.onTabClick}
            />
        </Menu>
        {
          this.renderActiveTab(activeTab)
        }
      </React.Fragment>
    )
  }
}

export default ProfileSubpages;
