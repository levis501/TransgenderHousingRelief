import React from 'react';

import AgreementPage from './AgreementPage';
import TermsOfServiceText from '../text/TermsOfServiceText';

const TermsOfServiceAgreementPage = () => (
  <AgreementPage agreementTitle='Terms of Service' link='/tos'>
    <TermsOfServiceText/>
  </AgreementPage>
);

export default TermsOfServiceAgreementPage;
