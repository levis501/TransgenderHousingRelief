import React from 'react';
import {
  Container,
  Grid
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import ProfileSubpages from './ProfileSubpages';

import UserInfo from './UserInfo';
import UserActionMenu from './UserActionMenu';

const ProfilePage = () => (
  <PageLayout>
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column mobile={6} tablet={6} computer={4} largeScreen={4} wideScreen={4}>
            <UserInfo/>
            <UserActionMenu/>
          </Grid.Column>
          <Grid.Column mobile={10} tablet={10} computer={12} largeScreen={12} wideScreen={12}>
            <ProfileSubpages/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </PageLayout>
)

export default ProfilePage;
