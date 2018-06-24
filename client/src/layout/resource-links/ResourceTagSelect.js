import React, { Component } from 'react';
import { Dropdown, Form, Button } from 'semantic-ui-react';

class ResourceTagSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
    this.onChangeTags = this.onChangeTags.bind(this);
    this.dropdownStyle = { 'minWidth': '300px' }
    this.formStyle = { '': '10px' }
  }
  onTagClicked(tag) {
    if (this.state.tags.includes(tag)) return;
    this.setState({ tags: [...this.state.tags, tag] })
  }
  onChangeTags(e, { value }) {
    this.setState({ tags: value });
    this.props.onChangeTags(value);
  }
  clearFilter() {
    this.setState({ tags: [] });
    this.props.onChangeTags([]);
  }
  render() {
    return (
      <Form>
        <Form.Input label='Filter: '>
          <Dropdown fluid selection search multiple placeholder='Select tags...'
            // style={this.dropdownStyle}
            options={this.props.allTags.map((item) => ({ text: item, value: item }))}
            value={this.state.tags} onChange={this.onChangeTags}
          />
        </Form.Input>
        {(this.state.tags.length < 2) ? null :
          <Button onClick={this.clearFilter.bind(this)}>Clear filter</Button>
        }
      </Form>
    );
  }
}

export default ResourceTagSelect;
