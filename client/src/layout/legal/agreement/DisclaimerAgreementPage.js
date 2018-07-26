import React from 'react';

import AgreementPage from './AgreementPage';
import DisclaimerText from '../text/DisclaimerText';

const DisclaimerAgreementPage = () => (
  <AgreementPage agreementTitle='Disclaimer' link='/disclaimer'>
    <DisclaimerText/>
  </AgreementPage>
);

export default DisclaimerAgreementPage;
