import React from 'react';
import PropTypes from 'prop-types';
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

SettingsBaseForm.propTypes = {
  onSave: PropTypes.func,
  children: PropTypes.element
}


export default SettingsBaseForm;
