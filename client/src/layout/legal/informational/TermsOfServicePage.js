import React from 'react';

import PageLayout from '../../components/PageLayout';
import LegalTextContainer from './LegalTextContainer';

import TermsOfServiceText from '../text/TermsOfServiceText';

const TermsOfServicePage = () => (
  <PageLayout>
    <LegalTextContainer agreementTitle='Terms of Service'>
      <TermsOfServiceText/>
    </LegalTextContainer>
  </PageLayout>
)

export default TermsOfServicePage;
