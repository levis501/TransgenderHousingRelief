import React from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

const LegalTextContainer = ({children, agreementTitle}) => (
  <Container text
    style={{
      marginTop: '1em',
      marginBottom: '3em'
    }}>
    <Header as='h1'>{agreementTitle}</Header>
    {children}
  </Container>
);

export default LegalTextContainer;
