import React, { Component } from 'react';
import { Dropdown, Form, Label } from 'semantic-ui-react';

import { tags } from '../../../data/tags';

const tagOptions = tags.map(item => {
  return {
    text: item.name,
    value: item.name
  }
})

class TagSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
    this.onChangeTags = this.onChangeTags.bind(this);
  }
  onTagClicked(tag) {
    if (this.state.tags.includes(tag)) return;
    this.setState({tags: [...this.state.tags, tag]})
  }
  onChangeTags(e,{value}) {
    this.setState({tags: value});
  }
  renderTags() {
    const tagTypes = [];
    tags.forEach(item => {
      if (!tagTypes.includes(item.type)) {
        tagTypes.push(item.type);
      }
    });
    return tagTypes.map(type=> (
      <div key={type} style={{marginBottom: '.5em'}}>
        <Label>
          {type}
        </Label>
        {
          tags.map(item=>{
            if (item.type === type) {
              return (
                <Label as='a'
                  key={item.name}
                  color={item.color}
                  onClick={()=>this.onTagClicked(item.name)}
                  style={{marginBottom: '.25em'}}>
                  {item.name}
                </Label>
              )
            }
            else return null;
          })
        }
      </div>
    ))
  }
  render() {
    return (
      <React.Fragment>
        <Form.Input label='Tags'>
          <Dropdown fluid search selection multiple placeholder='Enter tag...'
            options={tagOptions}
            value={this.state.tags} onChange={this.onChangeTags}
          />
        </Form.Input>
        {
          this.renderTags()
        }
      </React.Fragment>
    );
  }
}

export default TagSelect;
