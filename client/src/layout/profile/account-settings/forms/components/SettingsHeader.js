import React from 'react';
import {
  Grid,
  Header,
  Button,
  Icon
} from 'semantic-ui-react';

export const SettingsHeaderReadOnly = ({title}) => (
  <Header>{title}</Header>
)

const SettingsHeader = ({title, editable, edit, onToggleEdit}) => (
  <React.Fragment>
    <Grid>
      <Grid.Row>
        <Grid.Column width={10}>
          <Header>{title}</Header>
        </Grid.Column>
        <Grid.Column width={6} textAlign='right'>
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
  </React.Fragment>
)

export default SettingsHeader;
