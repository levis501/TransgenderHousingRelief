import React, { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

const sortByOptions=[
  { value: 'newest', text: 'Post Date'},
  { value: 'start-date', text: 'Start Date' },
  { value: 'city', text: 'City' },
]

class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: sortByOptions[0].value,
      descending: true
    };
    this.onChangeSortBy = this.onChangeSortBy.bind(this);
    this.onChangeDirection = this.onChangeDirection.bind(this);
  }
  onChangeDirection() {
    this.setState({ descending: !this.state.descending });
  }
  onChangeSortBy(e, {value}) {
    this.setState({ sortBy: value, descending: true });
  }
  render() {
    return (
      <span>
        <Dropdown selection
          value={this.state.sortBy}
          options={sortByOptions}
          onChange={this.onChangeSortBy}
          />
          <Button basic
            style={{ marginLeft: '0.2em' }}
            icon={
              this.state.descending ?
                'long arrow alternate down' :
                'long arrow alternate up'
              }
            onClick={this.onChangeDirection}
            />
      </span>
    )
  }
}

export default SortBy;
