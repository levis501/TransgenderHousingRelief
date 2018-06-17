import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class TextSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText(e, props) {
    this.setState({text: props.value});
  }
  render() {
    return (
      <Form.Input width={16} label='Text Search' labelPosition='left' type='text'>
        <Input value={this.state.text} onChange={this.onChangeText}
          />
      </Form.Input>
    )
  }
}

export default TextSearch;
