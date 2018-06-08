import React from 'react';
import {
  Button,
  Icon,
  Container,
  Segment,
  Grid,
  Header
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import PageLayout from '../components/PageLayout';

const SegmentStyle = {
  margin: '1em 0em'
}

const MissionStatement = () => (
  <Segment vertical textAlign='center' style={SegmentStyle}>
    <Header as='h1'>Mission Statement</Header>
    <p style={{fontSize: '1.33em'}}>
      Craigslist for emergency housing of course
    </p>
  </Segment>
)

const Actions = () => (
  <Segment vertical textAlign='center' style={SegmentStyle}>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h2'>Find Housing</Header>
          <p>asfo jaosif aoiem aiofefiuaneiuf</p>
          <Button as={Link} to='/search' size='large'>
            Get Started
            <Icon name='right arrow' />
          </Button>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as='h2'>Offer Housing</Header>
          <p>asfo jaosif aoiem aiofefiuaneiuf</p>
          <Button as={Link} to='/offer-housing' size='large'>
            Get Started
            <Icon name='right arrow' />
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

const Announcements = () => (
  <Segment vertical textAlign='center' style={SegmentStyle}>
    <Header as='h2'>Announcements</Header>
  </Segment>
)

const HelpOut = () => (
  <Segment vertical textAlign='center' style={SegmentStyle}>
    <Header as='h2'>Help Out</Header>
  </Segment>
)

const HomePage = () => (
  <PageLayout>
    <Container>
      <MissionStatement />
      <Actions />
      <Announcements />
      <HelpOut />
    </Container>
  </PageLayout>
);

export default HomePage;
