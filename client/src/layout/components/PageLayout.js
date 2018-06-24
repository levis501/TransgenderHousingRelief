import React from 'react';

import PageFooter from './footer/PageFooter';
import PageHeader from './header/PageHeader';

const PageLayout = ({children}) => (
  <div>
    <PageHeader />
      <div
        style={{
          minHeight: '20em'
        }}
        >
        {children}
      </div>
    <PageFooter />
  </div>
);

export default PageLayout;
