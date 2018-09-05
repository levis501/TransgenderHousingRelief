import React from 'react';
import {
  Button,
  Container,
  Header,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import PageLayout from '../components/PageLayout';

const EmailVerificationPage = () => (
  <PageLayout>
    <Container text textAlign='center'>
      <Header as='h2'>We've sent you a verification email</Header>
      <p>Check email for email verification link.</p>
      <Button as={Link} to='/' size='large'>
        Return to listings
      </Button>
    </Container>
  </PageLayout>
);

export default EmailVerificationPage;
