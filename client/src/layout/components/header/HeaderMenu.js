import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

const HeaderMenu = (props) => {
  const { path } = props.match;
  return (
    <Menu pointing secondary>
      <Menu.Item as={Link} to='/search' name='Find Housing' active={path === '/search'} />
      <Menu.Item as={Link} to='/offer-housing' name='Offer Housing' active={path === '/offer-housing'} />
      <Menu.Item as={Link} to='/legal' name='Legal Resources' active={path === '/legal'} />
    </Menu>
  )
}

export default withRouter(HeaderMenu);
