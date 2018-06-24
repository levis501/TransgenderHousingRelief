import React, { Component } from 'react';
import {
  Icon,
  Header,
  Table,
  Label,
  Grid,
} from 'semantic-ui-react';
import ResourceTagSelect from './ResourceTagSelect';
import resources from '../../data/legal-housing-resources.json';


class ResourceLinks extends Component {
  constructor(props) {
    super(props);
    this.state = { sortDirection: 1, allTags: [], selectedTags: [] };
    this.rightAlignStyle = { marginRight: '0px' };
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

  onChangeTags(selectedTags) {
    this.setState({ selectedTags })
  }

  selectedTagsFilter = (record) =>
    (this.state.selectedTags.every(selectedTag =>
      record.tags.some(tag => (tag === selectedTag))));

  componentWillMount() {
    const tagSet = new Set();
    resources.filter(this.props.recordFilter).forEach(
      (record) => {
        record.tags.forEach((tag) => tagSet.add(tag))
      }
    );
    this.setState({ allTags: Array.from(tagSet) });
  }

  Row = (row, tagDisplayFilter) => {
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
          {row.tags.filter(tagDisplayFilter)
            .map(tag => (<Label className='tableCellLabel'>{tag}</Label>))
          }
        </Table.Cell>
      </Table.Row >
    )
  };


  render() {
    const headerText = ["Resource Name", "Description", "Phone Number", "Tags"];
    return (
      <React.Fragment>
        <Header as='h1'>{this.props.title}</Header>
        <ResourceTagSelect allTags={this.state.allTags.sort()} onChangeTags={this.onChangeTags.bind(this)} />
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
              .filter(this.selectedTagsFilter.bind(this))
              .sort((r1, r2) => this.state.sortDirection * r1.name.localeCompare(r2.name))
              .map(r => this.Row(r, this.props.tagDisplayFilter))}
          </Table.Body>
        </Table>
      </React.Fragment>
    )
  }
}

export default ResourceLinks;
