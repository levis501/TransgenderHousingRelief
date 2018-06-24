import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header
} from 'semantic-ui-react';

import PageLayout from './components/PageLayout';

const NotFoundPage = () => (
  <PageLayout>
    <Container text
      style={{
        marginTop: '1em',
        marginBottom: '4em'
      }}>
      <Header as='h1'>Page Not Found (404)</Header>
      <p>
        The requested page could not be found.
        If you believe this is in error, please file a bug report via the <Link to='/feedback'>Feedback page</Link>.
      </p>
    </Container>
  </PageLayout>
)

export default NotFoundPage;
