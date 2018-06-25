import React from 'react';
import {
  Grid,
  Header,
  Button,
  Icon
} from 'semantic-ui-react';

const SettingsHeader = ({title, edit, onToggleEdit}) => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <Header>{title}</Header>
      </Grid.Column>
      <Grid.Column width={8} textAlign='right'>
        {
          edit ? (
            <Button onClick={onToggleEdit}>
              <Icon name='x'/>
              Cancel
            </Button>
          ) : (
            <Button onClick={onToggleEdit}>
              <Icon name='edit'/>
              Edit
            </Button>
          )
        }
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default SettingsHeader;
