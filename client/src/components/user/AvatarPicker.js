import React from 'react';
import {
  Form,
  Grid,
  Button,
  Image
} from 'semantic-ui-react';

import imgAvatar1 from '../../resources/img/avatars/avatar1.png';
import imgAvatar2 from '../../resources/img/avatars/avatar2.png';
import imgAvatar3 from '../../resources/img/avatars/avatar3.png';
import imgAvatar4 from '../../resources/img/avatars/avatar4.png';
import imgAvatar5 from '../../resources/img/avatars/avatar5.png';
import imgAvatar6 from '../../resources/img/avatars/avatar6.png';
import imgAvatar7 from '../../resources/img/avatars/avatar7.png';
import imgAvatar8 from '../../resources/img/avatars/avatar8.png';

const avatarImages = [
  imgAvatar1, imgAvatar2, imgAvatar3, imgAvatar4,
  imgAvatar5, imgAvatar6, imgAvatar7, imgAvatar8
];

const AvatarButton = ({id, selectedId, onClick}) => {
  const selected = (id === selectedId);
  return (
    <Button basic
      color = {selected ? 'blue' : ''}
      onClick = {() => onClick(id)}>
      <Image src={ avatarImages[id] } size='small' style={{minWidth:'48px'}} />
    </Button>
  );
};

class AvatarPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0
    };
    this.pickAvatar = this.pickAvatar.bind(this);
  }
  pickAvatar(selectedId) {
    this.setState({ selectedId });
  }
  render() {
    return (
      <Form>
        <Grid columns='equal'>
          <Form.Field style={{marginBottom: 0}}>
            <label>Avatar</label>
          </Form.Field>
          <Grid.Row>
            <Grid.Column><AvatarButton id={0} selectedId={this.state.selectedId} onClick={this.pickAvatar} /></Grid.Column>
            <Grid.Column><AvatarButton id={1} selectedId={this.state.selectedId} onClick={this.pickAvatar} /></Grid.Column>
            <Grid.Column><AvatarButton id={2} selectedId={this.state.selectedId} onClick={this.pickAvatar} /></Grid.Column>
            <Grid.Column><AvatarButton id={3} selectedId={this.state.selectedId} onClick={this.pickAvatar} /></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column><AvatarButton id={4} selectedId={this.state.selectedId} onClick={this.pickAvatar} /></Grid.Column>
            <Grid.Column><AvatarButton id={5} selectedId={this.state.selectedId} onClick={this.pickAvatar} /></Grid.Column>
            <Grid.Column><AvatarButton id={6} selectedId={this.state.selectedId} onClick={this.pickAvatar} /></Grid.Column>
            <Grid.Column><AvatarButton id={7} selectedId={this.state.selectedId} onClick={this.pickAvatar} /></Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    )
  }
}

export default AvatarPicker;
