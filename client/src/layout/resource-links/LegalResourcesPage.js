import React from 'react';
import { Container } from 'semantic-ui-react';
import PageLayout from '../components/PageLayout';
import ResourceLinks from './ResourceLinks';

const tagStartsWithLegal = tag => tag.match(/^legal-.+/i)
const recordHasALegalTag = record => record.tags.some(tagStartsWithLegal)
const tagDoesntStartWithHousingLegalOrUS = tag => !tag.match(/^(legal-|us|housing)/i)

export default () => {
  return (<PageLayout>
    <Container>
      <ResourceLinks
        title='Legal Resources'
        recordDisplayFilter={recordHasALegalTag}
        tagDisplayFilter={tagDoesntStartWithHousingLegalOrUS}
      />
    </Container>
  </PageLayout>)
}
