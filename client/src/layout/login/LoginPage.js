import React from 'react';
import {
  Container,
  Grid
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import LoginForm from '../../components/forms/LoginForm';

const loginFormStyle = {
  margin: '1em 0'
}

const LoginPage = () => (
  <PageLayout>
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column
            mobile={14}
            tablet={9}
            computer={7}>
            <LoginForm style={loginFormStyle} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </PageLayout>
)

export default LoginPage;
