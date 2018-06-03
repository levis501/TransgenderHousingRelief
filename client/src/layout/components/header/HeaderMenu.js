import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

class HeaderMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        <Menu.Item name='Find Housing' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='Offer Housing' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='Legal Resources' active={activeItem === 'messages'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default HeaderMenu;
