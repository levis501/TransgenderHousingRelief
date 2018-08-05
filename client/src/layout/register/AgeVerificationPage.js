import React from 'react';
import {
  Button,
  Checkbox,
  Container,
  Dropdown,
  Form,
  Grid,
  Header
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import BirthDateInput from './BirthDateInput';

class AgeVerificationForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Form>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} computer={8}>
              <BirthDateInput />
              <Form.Field>
                <span>
                  <Checkbox label='My date of birth is accurate' />
                </span>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center'>
              <Button primary size='large'>
                Confirm
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

const AgeVerificationPage = () => (
  <PageLayout>
    <Container>
      <Header as='h1'>Date of Birth</Header>
      <AgeVerificationForm />
    </Container>
  </PageLayout>
)

export default AgeVerificationPage;
