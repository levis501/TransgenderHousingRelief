import React from 'react';
import {
  Button,
  Container,
  Checkbox,
  Form,
  Grid,
  Header
} from 'semantic-ui-react';

import PageLayout from '../../components/PageLayout';

class AgreementPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agreeChecked: false,
      reachedBottom: false
    }
    this.onToggleAgree = this.onToggleAgree.bind(this);
  }
  onToggleAgree(e, {checked}) {
    this.setState({agreeChecked: checked});
  }
  handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      this.setState({reachedBottom: true});
    }
  }
  render() {
    const {children, agreementTitle} = this.props;
    return (
      <PageLayout>
        <Container text>
          <Header as='h1'>{this.props.agreementTitle}</Header>
          <div onScroll={this.handleScroll}
            style={{
              overflowY: 'auto',
              maxHeight: '25em',
              marginBottom: '1em'
            }}>
            {children}
          </div>
          <Form>
            <Form.Field>
            <Checkbox
              onChange={this.onToggleAgree}
              checked={this.state.agreeChecked}
              disabled={!this.state.reachedBottom}
              label={`I have fully read and agree to the ${agreementTitle}.`}
              />
            </Form.Field>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Form.Field>
                    <Button>Decline</Button>
                  </Form.Field>
                </Grid.Column>
                <Grid.Column width={8} textAlign='right'>
                  <Form.Field>
                    <Button disabled={!this.state.agreeChecked || !this.state.reachedBottom}>
                      Accept
                    </Button>
                  </Form.Field>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Container>
      </PageLayout>
    );
  }
}

export default AgreementPage;
