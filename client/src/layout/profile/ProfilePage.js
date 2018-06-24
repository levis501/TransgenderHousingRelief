import React from 'react';
import {
  Container,
  Grid,
  Header
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import SearchResults from '../../components/forms/search/SearchResults';
import UserInfo from './UserInfo';
import UserActionMenu from './UserActionMenu';

const UserPostsList = () => (
  <React.Fragment>
    <Header as='h2'>Active Listings</Header>
    <SearchResults/>
  </React.Fragment>
)

const ProfilePage = () => (
  <PageLayout>
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <UserInfo/>
            <UserActionMenu/>
          </Grid.Column>
          <Grid.Column width={10}>
            <UserPostsList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </PageLayout>
)

export default ProfilePage;
