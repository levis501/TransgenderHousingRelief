import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import {
  Container,
  Icon,
  Header,
  Table,
  Label,
} from 'semantic-ui-react';
import ResourceTagSelect from './ResourceTagSelect';
import AllResources from '../../data/legal-housing-resources.json';
import SortingHeader from './SortingHeader';


class ResourceLinks extends Component {

  onChangeSorting() {
    throw (new Error('onChangeSorting not yet implemeneted'))
  }

  onChangeTags(selectedTags) {
    throw (new Error('onChangeTags not yet implemeneted'))
  }

  Row = (row, tagDisplayFilter) => {
    return (
      <Table.Row key={row.name + row.url} >
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
            .map(tag => (<Label key={row.name + row.url + tag} className='tableCellLabel'>{tag}</Label>))
          }
        </Table.Cell>
      </Table.Row >
    )
  }

  renderTableHeader(sort) {
    const headerText = ["Resource Name", "Description", "Phone Number", "Tags"];
    return (
      <Table.Header>
        <Table.Row>
          {headerText.map((title, i) =>
            (i === 0)
              ? < SortingHeader key='0' title={title} sort={sort} onChangeSorting={this.onChangeSorting}  />
              : <Table.HeaderCell key={i} padding='0' margin='0'>{title}</Table.HeaderCell>
          )}
        </Table.Row>
      </Table.Header>
    )
  }

  uniqueSortTags(tags) {
    window.dbg = tags;
    return Array.from(new Set(tags.map(tag => tag.toLowerCase()))).sort()
  }

  parseUrlParams() {
    const params = this.props.match.params;

    const selectedTags = params.selectedTags ? params.selectedTags.split(',') : []
    const selectedTagFilter = resource => selectedTags.every(s => resource.tags.some(r => r === s))

    const sort = params.sort || 1

    const isHousing = params.resourceType !== 'legal'
    const resourceTypeFilter = resource => (isHousing == !resource.tags.some(tag => tag.match(/^legal/i)));
    const resourcesForType = AllResources.filter(resourceTypeFilter)

    const resources = resourcesForType.filter(selectedTagFilter).sort((r1, r2) => sort * r1.name.localeCompare(r2.name))

    const tagDisplayFilter = isHousing
      ? tag => !tag.match(/^(housing|us)/i)
      : tag => !tag.match(/^(legal|housing|us)/i)

    const allTagsForResourceType = this.uniqueSortTags([].concat(...resourcesForType.map(resource => resource.tags)))

    const title = isHousing ? 'Housing Resoures' : 'Legal Resources'
    return {
      resources,
      selectedTags,
      sort,
      tagDisplayFilter,
      allTagsForResourceType,
      title,
    }
  }


  render() {
    const { resources, title, selectedTags, sort, tagDisplayFilter, allTagsForResourceType } = this.parseUrlParams()
    window.dbg = title;

    return (
      <PageLayout>
        <Container>
          <Header as='h1'>{title}</Header>
          <ResourceTagSelect allTags={allTagsForResourceType} selectedTags={selectedTags} onChangeTags={this.onChangeTags} />
          <Table celled padded>
            {this.renderTableHeader(sort)}
            <Table.Body>
              {resources.map(r => this.Row(r, tagDisplayFilter))}
            </Table.Body>
          </Table>
        </Container>
      </PageLayout>
    )
  }
}

export default withRouter(ResourceLinks);
