import React from 'react'
import {
  Container,
  Header,
  Image,
  Grid
} from 'semantic-ui-react'

import PageLayout from '../components/PageLayout'
import SponsorIcon from '../../resources/img/icon.png'

const SponsorsPage = () => (
  <PageLayout>
    <Container>
      <Header as='h1'>
        We'd like to thank the sponsors below for providing resources for this project
      </Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image size='small' float='left' src={SponsorIcon} />
          </Grid.Column>
          <Grid.Column width={13}>
            <Header as='h2'>A Sponsor Name</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image size='small' float='left' src={SponsorIcon} />
          </Grid.Column>
          <Grid.Column width={13}>
            <Header as='h2'>A Sponsor Name</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image size='small' float='left' src={SponsorIcon} />
          </Grid.Column>
          <Grid.Column width={13}>
            <Header as='h2'>A Sponsor Name</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image size='small' float='left' src={SponsorIcon} />
          </Grid.Column>
          <Grid.Column width={13}>
            <Header as='h2'>A Sponsor Name</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </PageLayout>
)

export default SponsorsPage;
