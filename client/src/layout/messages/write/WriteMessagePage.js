import React from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

import PageLayout from '../../components/PageLayout';
import WriteMessageForm from './WriteMessageForm';

class WriteMessagePage extends React.Component {
  render() {
    return (
      <PageLayout>
        <Container>
          <Header as='h1'>Write Message</Header>
          <WriteMessageForm />
        </Container>
      </PageLayout>
    );
  }
}

export default WriteMessagePage;
