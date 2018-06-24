import React from 'react';
import {
  Header
} from 'semantic-ui-react';

import PageLayout from '../../components/PageLayout';
import LegalTextContainer from './LegalTextContainer';

import TermsOfServiceText from '../text/TermsOfServiceText';

const TermsOfServicePage = () => (
  <PageLayout>
    <LegalTextContainer>
      <TermsOfServiceText/>
    </LegalTextContainer>
  </PageLayout>
)

export default TermsOfServicePage;
