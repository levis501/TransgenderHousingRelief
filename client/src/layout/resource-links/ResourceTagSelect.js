import React, { Component } from 'react';
import { Dropdown, Form, Button } from 'semantic-ui-react';
import escapeStringRegexp from 'escape-string-regexp';

class ResourceTagSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
    this.onChangeTags = this.onChangeTags.bind(this);
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

  search(options, input) {
    const minify = (str) => str.replace(/(\s|-)/g, '');
    const inputRegex = new RegExp(escapeStringRegexp(minify(input)),'i');
    return options.filter((option) => minify(option.value).match(inputRegex));
  }

  render() {
    return (
      <Form>
        <Form.Input label='Filter: '>
          <Dropdown fluid selection multiple placeholder='Select tags...'
            options={this.props.allTags.map((item) => ({ text: item, value: item }))}
            value={this.state.tags} onChange={this.onChangeTags}
            search={this.search.bind(this)}
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
