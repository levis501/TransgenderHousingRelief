import React from 'react';
import {
  Card,
  Grid
} from 'semantic-ui-react';

import Pagination from '../../components/Pagination';

import Notification from './Notification';

const NotificationList = ({notifications}) => (
  <React.Fragment>
    <Card.Group>
      {
        notifications.map((message, i) => (
          <Notification
            title={message.title}
            date={message.date}
            color={message.color}
            path={message.path}
            />
        ))
      }
    </Card.Group>
    <Grid>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <Pagination
            defaultActivePage={1}
            totalPages={1}
            />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </React.Fragment>
);

export default NotificationList;
