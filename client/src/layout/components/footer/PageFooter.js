import React from 'react';
import {
  Segment,
  Container,
  Grid,
  Header,
  List
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const FooterStyle = {
  padding: '3em 0em',
  marginTop: '1em'
}

const PageFooter = () => (
  <Segment inverted vertical style={FooterStyle}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header inverted>
              Help
            </Header>
            <List link inverted>
              <List.Item as={Link} to='/faq'>FAQ</List.Item>
              <List.Item as={Link} to='/contact'>Contact Us</List.Item>
              <List.Item as={Link} to='/feedback'>Feedback</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header inverted>
              Legal
            </Header>
            <List link inverted>
              <List.Item as={Link} to='/tos'>Terms of Service</List.Item>
              <List.Item as={Link} to='/disclaimer'>Disclaimer</List.Item>
              <List.Item as={Link} to='/privacy'>Privacy Policy</List.Item>
              <List.Item as='a'>Corporate Sponsors</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default PageFooter;
