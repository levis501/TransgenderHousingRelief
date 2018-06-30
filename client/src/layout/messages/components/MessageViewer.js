import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {
  Header,
  Grid,
  Button,
  Icon,
  Responsive
} from 'semantic-ui-react';

const BackButton = ({onClose}) => (
  <Button circular basic icon='left arrow'
    onClick={onClose}
    />
);
const MessageHeader = ({subject, sender, date})=>(
  <React.Fragment>
    <Header as='h2'>{subject ? subject : '<no subject>'}</Header>
    <span style={{fontSize:'1.1em'}}>
      From <Link to={`/profile/${sender}`}>{sender}</Link> - {date}
    </span>
  </React.Fragment>
);
const MessageMenu = () => (
  <React.Fragment>
    <Button primary
      as={Link} to='/messages/compose'>
      <Icon name='reply' /> Reply
    </Button>
    <Button negative>
      <Icon name='trash' /> Move to Trash
    </Button>
  </React.Fragment>
);
const MessageBody = ({body}) => (
  <p>
    {body}
  </p>
);
const MessageViewer = ({message, onClose}) => {
  const {subject, body, sender, date} = message;

  return (
    <React.Fragment>
      <Responsive as={Grid} minWidth={992}>
        <Grid.Row>
          <Grid.Column width={1}>
            <BackButton onClose={onClose}/>
          </Grid.Column>
          <Grid.Column width={7}>
            <MessageHeader subject={subject} sender={sender} date={date}/>
          </Grid.Column>
          <Grid.Column width={8} textAlign='right'>
            <MessageMenu/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={15} floated='right'>
            <MessageBody body={body}/>
          </Grid.Column>
        </Grid.Row>
      </Responsive>
      <Responsive as={Grid} maxWidth={991}>
        <Grid.Row>
          <Grid.Column width={2}>
            <BackButton onClose={onClose}/>
          </Grid.Column>
          <Grid.Column width={14} textAlign='right'>
            <MessageMenu/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16} floated='right'>
            <MessageHeader subject={subject} sender={sender} date={date}/>
            <MessageBody body={body}/>
          </Grid.Column>
        </Grid.Row>
      </Responsive>
    </React.Fragment>
  );
}

MessageViewer.propTypes = {
  message: PropTypes.object,
  onClose: PropTypes.func
}

export default MessageViewer;
