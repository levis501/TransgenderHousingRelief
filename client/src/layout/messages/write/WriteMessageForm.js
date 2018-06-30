import React from 'react';
import {
  Form,
  TextArea,
  Button,
  Icon,
  Dropdown
} from 'semantic-ui-react';

class WriteMessageForm extends React.Component {

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Subject</label>
          <Form.Input fluid />
        </Form.Field>
        <Form.Field>
          <label>Recipients</label>
          <Dropdown selection mutliple search/>
        </Form.Field>
        <Form.Field>
          <label>Body</label>
          <TextArea style={{minHeight: '200px'}} />
        </Form.Field>
        <Button><Icon name='save'/>Save as Draft</Button>
        <Button primary><Icon name='send'/>Send</Button>
      </Form>
    );
  }
}

export default WriteMessageForm;
