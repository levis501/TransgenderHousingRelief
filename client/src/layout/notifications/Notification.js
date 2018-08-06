import React from 'react';
import PropTypes from 'prop-types';
import {
  Card
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const Notification = ({path, title, date, color}) => (
  <Card as={Link} to={path} fluid color={color}>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{date}</Card.Meta>
    </Card.Content>
  </Card>
)

Notification.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  color: PropTypes.string
}
export default Notification;
