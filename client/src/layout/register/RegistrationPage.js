import React from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import RegistrationForm from '../../components/forms/registration/RegistrationForm';

const RegistrationPage = () => (
  <PageLayout>
    <Container>
      <Header as='h1'>Register an Account</Header>
      <RegistrationForm/>
    </Container>
  </PageLayout>
);

export default RegistrationPage;
