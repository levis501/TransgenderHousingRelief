import React from 'react';
import {
  Grid,
  Image,
  Container
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import HeaderMenu from './HeaderMenu';
import UserControl from '../../../components/user/UserControl';
import HeaderLogoSrc from '../../../resources/img/logo_full.png';

const HeaderLogo = () => (
  <Link to='/'>
    <Image src={HeaderLogoSrc}
      size='medium'
      />
  </Link>
);

const PageHeader = () => (
  <Container style={{marginTop: '1em', marginBottom: '1em'}}>
    <Grid>
      <Grid.Row>
        <Grid.Column width={6}>
          <HeaderLogo />
        </Grid.Column>
        <Grid.Column width={6} floated='right'>
          <UserControl />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <HeaderMenu />
  </Container>
);

export default PageHeader;
