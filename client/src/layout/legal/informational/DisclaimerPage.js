import React from 'react';

import PageLayout from '../../components/PageLayout';
import LegalTextContainer from './LegalTextContainer';

import DisclaimerText from '../text/DisclaimerText';

const DisclaimerPage = () => (
  <PageLayout>
    <LegalTextContainer agreementTitle='Disclaimer'>
      <DisclaimerText/>
    </LegalTextContainer>
  </PageLayout>
)

export default DisclaimerPage;
