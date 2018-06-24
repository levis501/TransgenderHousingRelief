import React from 'react';
import { Container } from 'semantic-ui-react';

const LegalTextContainer = ({children}) => (
  <Container text
    style={{
      marginTop: '1em',
      marginBottom: '3em'
    }}>
    {children}
  </Container>
);

export default LegalTextContainer;
