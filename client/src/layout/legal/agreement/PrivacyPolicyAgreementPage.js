import React from 'react';

import AgreementPage from './AgreementPage';
import PrivacyPolicyText from '../text/PrivacyPolicyText';

const PrivacyPolicyAgreementPage = () => (
  <AgreementPage agreementTitle='Privacy Policy' link='/privacy'>
    <PrivacyPolicyText/>
  </AgreementPage>
);

export default PrivacyPolicyAgreementPage;
