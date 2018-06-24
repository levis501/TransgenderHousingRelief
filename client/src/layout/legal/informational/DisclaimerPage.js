import React from 'react';
import {
  Header
} from 'semantic-ui-react';

import PageLayout from '../../components/PageLayout';
import LegalTextContainer from './LegalTextContainer';

import DisclaimerText from '../text/DisclaimerText';

const DisclaimerPage = () => (
  <PageLayout>
    <LegalTextContainer>
      <DisclaimerText/>
    </LegalTextContainer>
  </PageLayout>
)

export default DisclaimerPage;
