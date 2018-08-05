import React from 'react';
import {
  Container,
  Grid,
  Header,
  Icon,
  Label
} from 'semantic-ui-react';

import UserInfo from '../../components/user/UserInfo';

import PageLayout from '../components/PageLayout';
import ListingPrimaryMenu from './ListingPrimaryMenu';
import ListingSecondaryMenu from './ListingSecondaryMenu';

const bodyStyle = {
  marginTop: '1em',
  marginBottom: '2em',
  fontSize: '1.25em'
};

const ListingHeader = ({title, city, state, tags}) => (
  <Grid style={{marginBottom: '0.25em'}} stackable>
    <Grid.Row>
      <Grid.Column width={8}>
        <Header as='h1' style={{margin: 0}}>{title}</Header>
        <Header as='h3' style={{margin: 0}}>
          {city}, {state}
        </Header>

        <div style={{marginTop: '0.5em'}}>
          <Label basic size='large'>$0</Label>
          <Label basic size='large'><Icon name='calendar alternate outline'/>1/1/2018</Label>
          {
            tags ?
              tags.map(tag => (
                <Label key={tag} size='large' content={tag} />
              ))
              : null
          }
        </div>
      </Grid.Column>
      <Grid.Column computer={6} tablet={6} mobile={8}>
        <UserInfo />
        <ListingPrimaryMenu style={{marginTop: '0.5em'}} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const ListingPage = () => {
  const tags = ['first', 'second', 'third'];

  return (
    <PageLayout>
      <Container>
        <ListingHeader title='title' city='city' state='state' tags={tags} />

        <p style={bodyStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus ultrices in. Arcu bibendum at varius vel. Fermentum iaculis eu non diam phasellus vestibulum lorem. Auctor eu augue ut lectus arcu bibendum at varius vel. Arcu non sodales neque sodales ut. Nulla malesuada pellentesque elit eget gravida cum. Vel facilisis volutpat est velit egestas dui id ornare arcu. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Erat pellentesque adipiscing commodo elit at imperdiet dui. Elementum nisi quis eleifend quam adipiscing vitae proin. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Amet volutpat consequat mauris nunc congue. Nibh venenatis cras sed felis eget. Diam in arcu cursus euismod.
          <br/>
          Fames ac turpis egestas sed. Nec nam aliquam sem et tortor consequat. Id porta nibh venenatis cras sed. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Tristique senectus et netus et malesuada fames ac turpis. Augue lacus viverra vitae congue eu consequat ac. Habitant morbi tristique senectus et. Nisl vel pretium lectus quam id leo in. Congue eu consequat ac felis donec. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Lectus sit amet est placerat in egestas erat imperdiet. Ut tortor pretium viverra suspendisse potenti nullam ac. Elit ullamcorper dignissim cras tincidunt lobortis. Vulputate sapien nec sagittis aliquam. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.
        </p>

        <ListingSecondaryMenu />
      </Container>
    </PageLayout>
  )
}

export default ListingPage;
