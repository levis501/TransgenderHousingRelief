import React, { Component } from 'react';
import {
  Button,
  Container,
  Dropdown,
  Form,
  Grid,
  Header,
  Input
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import TextAreaWithLimit from '../../components/forms/TextAreaWithLimit';

const categoryOptions = [
  { value: 'suggestion', text: 'Suggestion' },
  { value: 'bug', text: 'Bug' },
  { value: 'general', text: 'General Feedback' }
];

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      bodyOverLimit: false
    }
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeTitleText = this.onChangeTitleText.bind(this);
    this.onChangeBodyText = this.onChangeBodyText.bind(this);
  }
  onChangeCategory(e, props) {
    this.setState({ category: props.value });
  }
  onChangeTitleText(e, props) {
    this.setState({ title: props.value });
  }
  onChangeBodyText(body, bodyOverLimit) {
    this.setState({ body, bodyOverLimit });
  }
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Category</label>
          <Dropdown selection
            options={categoryOptions}
            value={this.state.category}
            onChange={this.onChangeCategory}
          />
        </Form.Field>
        <Form.Field>
          <label>Title</label>
          <Input
            value={this.state.title}
            onChange={this.onChangeTitleText}
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

const FeedbackPage = () => (
  <PageLayout>
    <Container>
      <Header as='h1'>Feedback</Header>
      <ContactForm/>
    </Container>
  </PageLayout>
)


export default FeedbackPage;
