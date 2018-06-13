import React from 'react';
import {
  Container,
  Grid,
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import ForgotPasswordForm from '../../components/forms/ForgotPasswordForm';

const formStyle = {
  margin: '1em 0'
}

const ForgotPasswordPage = () => (
  <PageLayout>
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column
            mobile={14}
            tablet={9}
            computer={7}>
            <ForgotPasswordForm style={formStyle} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </PageLayout>
)

export default ForgotPasswordPage;
