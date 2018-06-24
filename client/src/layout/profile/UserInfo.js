import React from 'react';
import {
  Grid,
  Image,
  Header
} from 'semantic-ui-react';

import imgAvatar1 from '../../resources/img/avatars/avatar1.png';

const UserInfo = () => (
  <Grid style={{marginBottom: '1em'}}>
    <Grid.Row>
      <Grid.Column width={4}>
        <Image avatar size='small' src={imgAvatar1}/>
      </Grid.Column>
      <Grid.Column width={12}>
        <Header as='h1'>Username</Header>
        <p>Member since: {'1/1/2018'}</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default UserInfo;
