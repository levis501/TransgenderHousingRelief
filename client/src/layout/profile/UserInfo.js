import React from 'react';
import {
  Grid,
  Image,
  Header
} from 'semantic-ui-react';

import imgAvatar1 from '../../resources/img/avatars/avatar1.png';

function MemberSince() {
  return <p>Member since: {'1/1/2018'}</p>;
}

function SensitiveDatestamp(props) {
  if (props.isLoggedInUser === 'true') {
    return <MemberSince />;
  }

  return null;
};

const UserInfo = (props) => (
  <Grid style={{marginBottom: '1em'}}>
    <Grid.Row>
      <Grid.Column width={5}>
        <Image avatar size='small' src={imgAvatar1}/>
      </Grid.Column>
      <Grid.Column width={11}>
        <Header as='h1'>Username</Header>
        { SensitiveDatestamp(props) }
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default UserInfo;
