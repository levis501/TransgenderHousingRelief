import React from 'react';

import AgreementPage from './AgreementPage';
import DisclaimerText from '../text/DisclaimerText';

const DisclaimerAgreementPage = () => (
  <AgreementPage agreementTitle='Disclaimer'>
    <DisclaimerText/>
  </AgreementPage>
);

export default DisclaimerAgreementPage;
