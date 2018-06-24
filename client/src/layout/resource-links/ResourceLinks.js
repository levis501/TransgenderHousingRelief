import React, { Component } from 'react';
import {
  Icon,
  Button,
  Table,
  Label,
} from 'semantic-ui-react';

import resources from '../../data/legal-housing-resources.json';


const Row = (row, tagDisplayFilter) => {
  return (
    <Table.Row>
      <Table.Cell>
        <a href={row.url}>{row.name}</a>
      </Table.Cell>
      <Table.Cell>
        {row.description}
      </Table.Cell>
      <Table.Cell singleLine>
        {row.phone}
      </Table.Cell>
      <Table.Cell>
        {/* Don't display the tag associated with the select, since it is redundant */}
        {row.tags.filter(tagDisplayFilter)
          .map(tag => (<Label className='tableCellLabel'>{tag}</Label>))}
      </Table.Cell>
    </Table.Row >
  )
};

class ResourceLinks extends Component {
  constructor(props) {
    super(props);
    this.state = { sortDirection: 1 };
  }

  toggleSort() {
    this.setState({ sortDirection: -this.state.sortDirection });
  }

  SortingHeader = (title) => {
    return (
      <Table.HeaderCell key='0' padding='0' margin='0'
        onClick={this.toggleSort.bind(this)} >
        {title}
        <Icon name={(this.state.sortDirection > 0) ? 'arrow down' : 'arrow up'} />
      </Table.HeaderCell >
    )
  }

  render() {
    const headerText = ["Resource Name", "Description", "Phone Number", "Tags"];
    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            {headerText.map((title, i) =>
              (i == 0)
                ? this.SortingHeader(title)
                : <Table.HeaderCell key={i} padding='0' margin='0'>{title}</Table.HeaderCell>
            )}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {resources.filter(this.props.recordFilter)
            .sort((r1, r2) => this.state.sortDirection * r1.name.localeCompare(r2.name))
            .map(r => Row(r, this.props.tagDisplayFilter))}
        </Table.Body>
      </Table>
    )
  }
}

export default ResourceLinks;
