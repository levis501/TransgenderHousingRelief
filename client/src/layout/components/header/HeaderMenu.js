import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

const HeaderMenu = (props) => {
  const { path } = props.match;
  return (
    <Menu pointing secondary>
      <Menu.Item as={Link} to='/' name='Home' active={path === '/'} />
      <Menu.Item as={Link} to='/search' name='Search Offered' active={path === '/search'} />
      <Menu.Item as={Link} to='/offer-housing' name='Offer Housing' active={path === '/offer-housing'} />
      <Menu.Item as={Link} to='/submit' name='Submit Ad' active={path === '/submit'} />
      <Menu.Item as={Link} to='/safety-tips' name='Safety Tips' active={path === '/safety-tips'} />
      <Menu.Item as={Link} to='/housing-resources' name='Housing Resources' active={path === '/housing-resources'} />
      <Menu.Item as={Link} to='/legal' name='Legal Resources' active={path === '/legal'} />
    </Menu>
  )
}

export default withRouter(HeaderMenu);
