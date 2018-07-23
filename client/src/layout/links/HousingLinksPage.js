
import React, { Component } from 'react';
import {
  Container,
  Header,
  Table,
  Label,
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';


class HousingLinksPage extends Component {


  render() {
    return (
      <PageLayout>
        <Container>
          <Header as='h1'>Housing Resources</Header>
        </Container>
      </PageLayout>
    )
  }

}

export default HousingLinksPage;