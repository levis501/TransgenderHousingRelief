import React from 'react';
import {
  Container,
  Grid,
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import ForgotUsernameForm from '../../components/forms/ForgotUsernameForm';

const formStyle = {
  margin: '1em 0'
}

const ForgotUsernamePage = () => (
  <PageLayout>
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column
            mobile={14}
            tablet={9}
            computer={7}>
            <ForgotUsernameForm style={formStyle} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </PageLayout>
)

export default ForgotUsernamePage;
