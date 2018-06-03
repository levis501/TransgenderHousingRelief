import React from 'react';
import {
  Segment,
  Container,
  Grid,
  Header,
  List
} from 'semantic-ui-react';

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
              Uhm
            </Header>
            <List link inverted>
              <List.Item as='a'>Errm</List.Item>
              <List.Item as='a'>Uhh</List.Item>
              <List.Item as='a'>Ahem.</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header inverted>
              Uhm
            </Header>
            <List link inverted>
              <List.Item as='a'>Errm</List.Item>
              <List.Item as='a'>Uhh</List.Item>
              <List.Item as='a'>Ahem.</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default PageFooter;
