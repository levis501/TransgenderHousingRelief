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

const EmailVerificationPage = () => (
  <PageLayout>
    <Container text textAlign='center'>
      <Header as='h2'>Thanks for verifying your email!</Header>
      <p>You're all set.</p>
      <Button as={Link} to='/profile' size='large'>
        View your account
      </Button>
    </Container>
  </PageLayout>
);

export default EmailVerificationPage;
