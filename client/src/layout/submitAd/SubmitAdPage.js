import React from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';

import SubmitAdForm from '../../components/forms/submitAd/SubmitAdForm';

class SubmitAdPage extends React.Component {
  render() {
    return (
      <PageLayout>
        <Container>
          <Header as='h1'>Submit Ad</Header>
          <SubmitAdForm/>
        </Container>
      </PageLayout>
    )
  }
}

export default SubmitAdPage;
