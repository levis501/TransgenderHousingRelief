import React from 'react';
import {
  Pagination,
  Icon
} from 'semantic-ui-react';

export default (props) => {
  let showNextArrows = (props.totalPages > 1);
  let showSkipArrows = (props.totalPages > 3);

  return (
    <Pagination
      ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
      // Arrows are shown by default. Passing null hides them.
      firstItem = {
        showSkipArrows ? {
          content: <Icon name='angle double left' />,
          icon: true
        } : null
      }
      lastItem = {
        showSkipArrows ? {
          content: <Icon name='angle double right' />,
          icon: true
        } : null
      }
      prevItem = {
        showNextArrows ? {
          content: <Icon name='angle left' />,
          icon: true
        } : null
      }
      nextItem = {
        showNextArrows ? {
          content: <Icon name='angle right' />,
          icon: true
        } : null
      }
      {...props}
      />
  );
}
