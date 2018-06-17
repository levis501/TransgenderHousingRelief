import React from 'react';
import {
  Menu,
  Responsive
} from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

const MenuLinksTop = ({path}) => {
  return (
    <React.Fragment>
      <Menu.Item as={Link} to='/' name='Home' active={path === '/'} />
      <Menu.Item as={Link} to='/search-offered' name='Search Offered' active={path === '/search-offered'} />
      <Menu.Item as={Link} to='/search-wanted' name='Search Wanted' active={path === '/offer-housing'} />
      <Menu.Item as={Link} to='/submit' name='Submit Ad' active={path === '/submit'} />
    </React.Fragment>
  );
}
const MenuLinksBottom = ({path}) => {
  return (
    <React.Fragment>
      <Menu.Item as={Link} to='/safety-tips' name='Safety Tips' active={path === '/safety-tips'} />
      <Menu.Item as={Link} to='/housing-resources' name='Housing Resources' active={path === '/housing-resources'} />
      <Menu.Item as={Link} to='/legal' name='Legal Resources' active={path === '/legal'} />
    </React.Fragment>
  );
}

const HeaderMenu = (props) => {
  const {path} = props.match;
  return (
    <div style={{marginTop: '1em'}}>
      <Responsive maxWidth={990}>
        <Menu>
          <MenuLinksTop path={path} />
        </Menu>
        <Menu>
          <MenuLinksBottom path={path} />
        </Menu>
      </Responsive>
      <Responsive minWidth={991}>
        <Menu pointing>
          <MenuLinksTop path={path} />
          <MenuLinksBottom path={path} />
        </Menu>
      </Responsive>
    </div>
  )
}

export default withRouter(HeaderMenu);
