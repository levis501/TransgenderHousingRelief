import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import {
  Container,
  Header,
  Table,
  Label,
} from 'semantic-ui-react';
import ResourceTagSelect from './ResourceTagSelect';
import AllResources from '../../data/legal-housing-resources.json';
import SortingHeader from './SortingHeader';
import HousingLinksPage from './HousingLinksPage';
import LegalLinksPage from './LegalLinksPage';


class ResourceLinksPage extends Component {

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
            .map(tag => (<Label as='a' key={row.name + row.url + tag} className='tableCellLabel' onClick={() => this.addTag(tag)}>{tag}</Label>))
          }
        </Table.Cell>
      </Table.Row >
    )
  }

  uniqueSortTags(tags) {
    return Array.from(new Set(tags.map(tag => tag.toLowerCase()))).sort()
  }


  parseUrlParams() {
    const params = this.props.match.params;
    const isHousing = params.resourceType !== 'legal'
    const selectedTags = params.selectedTags ? params.selectedTags.split(',') : []
    const sort = params.sort || 1
    return { isHousing, sort, selectedTags };
  }

  applyUrlParams() {
    const {isHousing, sort, selectedTags} = this.parseUrlParams()
    const selectedTagFilter = resource => selectedTags.every(s => resource.tags.some(r => r === s))
    const resourceTypeFilter = resource => (isHousing === !resource.tags.some(tag => tag.match(/^legal/i)));
    const resourcesForType = AllResources.filter(resourceTypeFilter)
    const resources = resourcesForType.filter(selectedTagFilter).sort((r1, r2) => sort * r1.name.localeCompare(r2.name))
    const tagDisplayFilter = isHousing
      ? tag => !tag.match(/^(housing|us)/i)
      : tag => !tag.match(/^(legal|housing|us)/i)
    const allTagsForResourceType = this.uniqueSortTags([].concat(...resourcesForType.map(resource => resource.tags)))
    const title = isHousing ? 'Housing Resoures' : 'Legal Resources'
    return {
      isHousing,
      resources,
      selectedTags,
      sort,
      tagDisplayFilter,
      allTagsForResourceType,
      title,
    }
  }

  generateUrl(isHousing, sort, tags) {
    return `/links/${isHousing ? 'housing' : 'legal'}/${sort}/${tags}`;
  }

  redirect(isHousing, sort, tags) {
    this.context.router.history.push(this.generateUrl(isHousing, sort, this.uniqueSortTags(tags)));
  }

  setSort(sort) {
    const {isHousing, selectedTags} = this.parseUrlParams()
    this.redirect(isHousing, sort, selectedTags);
  }

  setSelectedTags(selectedTags) {
    const {isHousing, sort} = this.parseUrlParams()
    this.redirect(isHousing, sort, selectedTags);
  }

  addTag(newTag) {
    const {isHousing, sort, selectedTags} = this.parseUrlParams()
    this.redirect(isHousing, sort, selectedTags.concat(newTag));
  }

  render() {
    const { isHousing, resources, title, selectedTags, sort, tagDisplayFilter, allTagsForResourceType } = this.applyUrlParams()
    const headerText = ["Resource Name", "Description", "Phone Number", "Tags"];
    return (
      <PageLayout>
        <Container>
          <Header as='h1'>{title}</Header>
          <ResourceTagSelect
            title={isHousing ? "State" : "Filter"}
            multiple={!isHousing}
            noSelectionText={isHousing ? 'Any' : 'Select tags...'}
            allTags={allTagsForResourceType}
            selectedTags={selectedTags}
            onChangeTags={this.setSelectedTags.bind(this)} />
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                {headerText.map((title, i) =>
                  (i === 0)
                    ? < SortingHeader key='0' title={title} sort={sort} onChangeSorting={this.setSort.bind(this)} />
                    : <Table.HeaderCell key={i} padding='0' margin='0'>{title}</Table.HeaderCell>
                )}
              </Table.Row>
            </Table.Header>            
            <Table.Body>
              {resources.map(r => this.Row(r, tagDisplayFilter))}
            </Table.Body>
          </Table>
        </Container>
      </PageLayout>
    )
  }
}

ResourceLinksPage.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired
    }).isRequired,
    staticContext: PropTypes.object
  }).isRequired
};

export default withRouter(ResourceLinksPage);
