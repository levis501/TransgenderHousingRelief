import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Menu,
  Responsive
} from 'semantic-ui-react';

const AccountSettingsMenu = ({basePath, items, activeItem, onNavigate}) => {
  const renderMenuItems = (start, finish) => (
    <React.Fragment>
    {
      items.map(
        (item, i) => {
          if (!start) start = 0;
          if (!finish) finish = items.length;

          if (i < start || i >= finish) return null;

          return (
            <Menu.Item key={item.path}
              as={Link}
              to={`${basePath}/${item.path}`}
              name={item.name}
              active={activeItem === item.path}
              />
          );
        }
      )
    }
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Responsive maxWidth={767}>
        <Menu secondary>{renderMenuItems(0, 3)}</Menu>
        <Menu secondary>{renderMenuItems(3)}</Menu>
      </Responsive>
      <Responsive minWidth={768} maxWidth={991}>
        <Menu secondary>{renderMenuItems(0, 4)}</Menu>
        <Menu secondary>{renderMenuItems(4)}</Menu>
      </Responsive>
      <Responsive minWidth={992}
        as={Menu} secondary>
        {renderMenuItems()}
      </Responsive>
    </React.Fragment>
  );
};

AccountSettingsMenu.propTypes = {
  basePath: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  activeItem: PropTypes.string,
  onNavigate: PropTypes.func
}

export default AccountSettingsMenu;
