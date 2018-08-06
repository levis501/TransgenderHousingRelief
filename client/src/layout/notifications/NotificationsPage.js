import React from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

import NotificationList from './NotificationList';

import PageLayout from '../components/PageLayout';

const dummyNotifications = [
  {path: '/', title: 'New message from User54321', date: '1/1/1999 3:50pm', color: 'pink'},
  {path: '/', title: 'New listing from User1234', date: '1/1/1999 2:56pm', color: 'blue'}
];

const NotificationsPage = () => (
  <PageLayout>
    <Container text>
      <Header as='h1' textAlign='center'>Notifications</Header>
      <NotificationList notifications={dummyNotifications} />
    </Container>
  </PageLayout>
);

export default NotificationsPage;
