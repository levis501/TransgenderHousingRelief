import React from 'react';
import {
  Image,
  Header
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import imgAvatar1 from '../../resources/img/avatars/avatar1.png';

const UserInfo = () => (
  <Link to='/profile'>
    <Header as='h3'>
      <Image avatar src={imgAvatar1} />
      User
    </Header>
  </Link>
);

export default UserInfo;
