import React from 'react';
import {
  Grid,
  Button,
  Form
} from 'semantic-ui-react';

const SettingsBaseForm = ({children, onSave}) => (
  <Form>
    {children}
    <Grid>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <Button primary onClick={onSave}>Save</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Form>
)

export default SettingsBaseForm;
