import React from 'react';

import {
  PersonalInfoSettings,
  EmailSettings,
} from './settings-forms';

const AccountSettings = () => (
  <React.Fragment>
    <PersonalInfoSettings />
    <EmailSettings />
  </React.Fragment>
);

export default AccountSettings;
