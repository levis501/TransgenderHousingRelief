import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Grid,
  Button,
  Icon,
  Responsive
} from 'semantic-ui-react';

const MenuContainer = ({leftMenu, rightMenu}) => (
  <React.Fragment>
    <Responsive as={Grid} stackable minWidth={768}>
      <Grid.Row>
        <Grid.Column width={4}>
          {leftMenu}
        </Grid.Column>
        <Grid.Column width={12} textAlign='right'>
          {rightMenu}
        </Grid.Column>
      </Grid.Row>
    </Responsive>
    <Responsive maxWidth={767}>
      <Grid style={{marginBottom: '1em'}}>
        <Grid.Row>
          <Grid.Column width={16}>
            {leftMenu}{rightMenu}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>
  </React.Fragment>
);

const LeftMenu = ()=>(
    <Button primary as={Link} to='/messages/write'>
      <Icon name='compose'/> New
    </Button>
);

const RightMenu = ({inboxType, onSelectAll, onDelete, hasSelection})=>(
  <React.Fragment>
    <Button
      onClick={onSelectAll}
      >
      <Icon name='check square outline'/> Select All
    </Button>
    {
      inboxType === 'trash' ? (
        <Button disabled={!hasSelection}>
          <Icon name='undo'/> Restore
        </Button>
      ) : null
    }
    <Button negative
      disabled={!hasSelection}
      onClick={onDelete}
      >
      <Icon name='trash'/> Delete
    </Button>
  </React.Fragment>
);

const MessageListMenu = (props) => (
  <MenuContainer
    leftMenu={<LeftMenu/>}
    rightMenu={<RightMenu {...props} />}
    />
);

MessageListMenu.propTypes = {
  inboxType: PropTypes.string,
  onSelectAll: PropTypes.func,
  onDelete: PropTypes.func,
  hasSelection: PropTypes.bool
}

export default MessageListMenu;
