import React from 'react';

import PageFooter from './footer/PageFooter';
import PageHeader from './header/PageHeader';

const PageLayout = ({children}) => (
  <div>
    <PageHeader />
      {children}
    <PageFooter />
  </div>
);

export default PageLayout;
