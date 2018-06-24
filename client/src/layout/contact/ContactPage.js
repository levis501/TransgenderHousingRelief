import React, { Component } from 'react';
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Input
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import TextAreaWithLimit from '../../components/forms/TextAreaWithLimit';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      body: '',
      bodyOverLimit: false
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSubjectText = this.onChangeSubjectText.bind(this);
    this.onChangeBodyText = this.onChangeBodyText.bind(this);
  }
  onChangeName(e, props) {
    this.setState({ name: props.value });
  }
  onChangeEmail(e, props) {
    this.setState({ email: props.value });
  }
  onChangeSubjectText(e, props) {
    this.setState({ subject: props.value });
  }
  onChangeBodyText(body, bodyOverLimit) {
    this.setState({ body, bodyOverLimit });
  }
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Name</label>
          <Input
            value={this.state.name}
            onChange={this.onChangeName}
            />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input
            value={this.state.email}
            onChange={this.onChangeEmail}
            />
        </Form.Field>
        <Form.Field>
          <label>Subject</label>
          <Input
            value={this.state.subject}
            onChange={this.onChangeSubjectText}
            />
        </Form.Field>
        <Form.Field>
          <TextAreaWithLimit
            value={this.state.body}
            onChange={this.onChangeBodyText}
            />
        </Form.Field>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center'>
              <Button primary size='large'
                disabled={this.state.bodyOverLimit}
                >
                Submit
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

const ContactPage = () => (
  <PageLayout>
    <Container>
      <Header as='h1'>Contact Us</Header>
      <ContactForm/>
    </Container>
  </PageLayout>
)


export default ContactPage;
