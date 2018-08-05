import React from 'react';
import {
  Menu,
  Responsive
} from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

const MenuLinksTop = ({url}) => {
  return (
    <React.Fragment>
      <Menu.Item as={Link} to='/' name='Home' active={url === '/'} />
      <Menu.Item as={Link} to='/search-offered' name='Search Offered' active={url === '/search-offered'} />
      <Menu.Item as={Link} to='/search-wanted' name='Search Wanted' active={url === '/search-wanted'} />
      <Menu.Item as={Link} to='/submit' name='Submit Ad' active={url === '/submit'} />
    </React.Fragment>
  );
}
const MenuLinksBottom = ({url}) => {
  return (
    <React.Fragment>
      <Menu.Item as={Link} to='/safety-tips' name='Safety Tips' active={url === '/safety-tips'} />
      <Menu.Item as={Link} to='/links/housing' name='Housing Resources' active={url === '/links/housing'} />
      <Menu.Item as={Link} to='/links/legal' name='Legal Resources' active={url === '/links/legal'} />
      <Menu.Item as={Link} to='/sponsors' name='Sponsors' active={url === '/sponsors'} />
    </React.Fragment>
  );
}

const HeaderMenu = (props) => {
  const {url} = props.match;
  return (
    <div style={{marginTop: '1em'}}>
      <Responsive maxWidth={990}>
        <Menu>
          <MenuLinksTop url={url} />
        </Menu>
        <Menu>
          <MenuLinksBottom url={url} />
        </Menu>
      </Responsive>
      <Responsive minWidth={991}>
        <Menu pointing>
          <MenuLinksTop url={url} />
          <MenuLinksBottom url={url} />
        </Menu>
      </Responsive>
    </div>
  )
}

export default withRouter(HeaderMenu);
