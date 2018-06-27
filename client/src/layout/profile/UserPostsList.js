import React from 'react';
import PropTypes from 'prop-types';
import {
  Header
} from 'semantic-ui-react';

import SearchResults from '../../components/forms/search/SearchResults';

const UserPostsList = ({title}) => (
  <React.Fragment>
    {
      title ? (
        <Header as='h2'>{title}</Header>
      ) : null
    }
    <SearchResults/>
  </React.Fragment>
)

UserPostsList.propTypes = {
  title: PropTypes.string
}

export default UserPostsList;
