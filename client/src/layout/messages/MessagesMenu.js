import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Menu,
  Icon,
  Label,
  Input,
  Responsive
} from 'semantic-ui-react';

const basePath = '/messages';

const ResponsiveMenu = ({children}) => (
  <React.Fragment>
    <Responsive as={Menu} maxWidth={767} vertical secondary>
      {children}
    </Responsive>
    <Responsive as={Menu} minWidth={768} vertical tabular>
      {children}
    </Responsive>
  </React.Fragment>
);

const MessagesMenu = ({menuItemNames, activeItem, onClick}) => (
  <React.Fragment>
    <Input fluid icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' />
    <ResponsiveMenu>
      {
        menuItemNames.map(
          (item, i) => (
            <Menu.Item key={item.path}
              active={activeItem === item.path}
              as={Link}
              to={`${basePath}/${item.path}`}
              onClick={onClick}
              >
              <span>
                <Icon name={item.icon} /> {item.name}
              </span>
              <Label color='teal'>10</Label>
            </Menu.Item>
          )
        )
      }
    </ResponsiveMenu>
  </React.Fragment>
);

MessagesMenu.propTypes = {
  menuItemNames: PropTypes.arrayOf(PropTypes.object),
  activeItem: PropTypes.string,
  onClick: PropTypes.func
}

export default MessagesMenu;
