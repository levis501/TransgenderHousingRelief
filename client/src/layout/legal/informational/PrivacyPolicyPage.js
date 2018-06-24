import React from 'react';
import {
  Header
} from 'semantic-ui-react';

import PageLayout from '../../components/PageLayout';
import LegalTextContainer from './LegalTextContainer';

import PrivacyPolicyText from '../text/PrivacyPolicyText';

const PrivacyPolicyPage = () => (
  <PageLayout>
    <LegalTextContainer>
      <PrivacyPolicyText/>
    </LegalTextContainer>
  </PageLayout>
)


export default PrivacyPolicyPage;
