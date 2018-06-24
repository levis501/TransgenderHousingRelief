import React from 'react';

import PageLayout from '../../components/PageLayout';
import LegalTextContainer from './LegalTextContainer';

import PrivacyPolicyText from '../text/PrivacyPolicyText';

const PrivacyPolicyPage = () => (
  <PageLayout>
    <LegalTextContainer agreementTitle='Privacy Policy'>
      <PrivacyPolicyText/>
    </LegalTextContainer>
  </PageLayout>
)


export default PrivacyPolicyPage;
