import React from 'react';
import {
  Button,
  Container,
  Icon,
  Grid,
  Header,
  Segment
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
      Housing classifieds for transgender, intersex, and gender nonconforming individuals.
    </p>
  </Segment>
)

const Actions = () => (
  <React.Fragment>
    <Segment vertical style={SegmentStyle}>
      <Grid stackable>
        <Grid.Row centered>
          <Grid.Column width={6} textAlign='center'>
            <Header as='h2'>Emergency Offered</Header>
            <p>asfo jaosif aoiem aiofefiuaneiuf</p>
            <Button as={Link} to='/search-offered' size='large'>
              Search
              <Icon name='right search' />
            </Button>
          </Grid.Column>
          <Grid.Column width={6} textAlign='center'>
            <Header as='h2'>Emergency Wanted</Header>
            <p>asfo jaosif aoiem aiofefiuaneiuf</p>
            <Button as={Link} to='/search-wanted' size='large'>
              Search
              <Icon name='right search' />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment vertical textAlign='center' style={SegmentStyle}>
      <Grid stackable>
        <Grid.Row centered>
          <Grid.Column width={6} textAlign='center'>
            <Header as='h2'>Offered</Header>
            <p>asfo jaosif aoiem aiofefiuaneiuf</p>
            <Button as={Link} to='/search-offered' size='large'>
              Search
              <Icon name='right search' />
            </Button>
          </Grid.Column>
          <Grid.Column width={6} textAlign='center'>
            <Header as='h2'>Wanted</Header>
            <p>asfo jaosif aoiem aiofefiuaneiuf</p>
            <Button as={Link} to='/search-wanted' size='large'>
              Search
              <Icon name='right search' />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment vertical style={SegmentStyle}>
      <Grid stackable>
        <Grid.Row centered>
          <Grid.Column width={6} textAlign='center'>
            <Header as='h2'>Submit Ad</Header>
            <p>asfo jaosif aoiem aiofefiuaneiuf</p>
            <Button as={Link} to='/submit' size='large'>
              Get Started
              <Icon name='right arrow' />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </React.Fragment>
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
