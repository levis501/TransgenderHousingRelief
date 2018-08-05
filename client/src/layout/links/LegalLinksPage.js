
import React from 'react'
import { withRouter } from 'react-router'
import {
  Container,
  Header,
  Form,
  Dropdown,
  Button,
  Table,
  Label,
} from 'semantic-ui-react'

import PageLayout from '../components/PageLayout'
import RedirectComponent from '../../components/RedirectComponent'
import { LinksWithTagMatching, GetUniqueTags, DropdownOptionsForTags, TagSearch } from '../../data/LinksData'
import SortingHeader from './SortingHeader';

const urlParsers = {
  tags: (tags) => (tags ? tags.split(',') : []),
  sort: (sort) => (sort || 1),
}

const urlBuilders = {
  tags: (tags) => (tags.join(','))
}

class LegalLinksPage extends RedirectComponent {
  constructor(props) {
    super(props, '/links/legal', ['sort', 'tags'], urlParsers, urlBuilders)
    this.addTag = this.addTag.bind(this)
  }

  addTag(tag) {
    this.redirect({ tags: this.urlParams().tags.concat(tag) })
  }

  renderTag(tag) {
    return (
      <Label as='a' key={tag} className='tableCellLabel' onClick={() => this.addTag(tag)}>
        {tag}
      </Label>)
  }

  renderRow(resource, tagDisplayFilter) {
    return (
      <Table.Row key={resource.name + resource.url} >
        <Table.Cell>
          <a href={resource.url}>{resource.name}</a>
        </Table.Cell>
        <Table.Cell>
          {resource.description}
        </Table.Cell>
        <Table.Cell singleLine>
          {resource.phone}
        </Table.Cell>
        <Table.Cell>
          {resource.tags.filter(tagDisplayFilter)
            .map(tag => this.renderTag(tag))
          }
        </Table.Cell>
      </Table.Row >
    )
  }

  render() {
    const { tags, sort } = this.urlParams();
    const allLegalResources = LinksWithTagMatching(/^legal/i).sort((r1, r2) => sort * r1.name.localeCompare(r2.name))
    const allLegalTags = GetUniqueTags(allLegalResources);
    const selectableTags = allLegalTags.filter(tag => !tag.match(/^legal/i))
    const selectedTagFilter = resource => tags.every(s => resource.tags.some(r => r === s))
    const tagDisplayFilter = tag => !tag.match(/^(legal|housing|us)/i)
    const resources = allLegalResources.filter(selectedTagFilter)

    return (
      <PageLayout>
        <Container>
          <Header as='h1'>Legal Resources</Header>
          <Form>
            <Form.Input>
              <Dropdown selection multiple placeholder='Filter tags...'
                options={DropdownOptionsForTags(selectableTags)}
                value={tags} onChange={(e, v) => this.redirect({ tags: v.value })}
                search={TagSearch}
              />
            </Form.Input>
            {(tags.length < 2) ? null :
              <Button onClick={() => this.redirect({ tags: [] })}>Clear filter</Button>
            }
          </Form>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <SortingHeader key={0} title='Legal Resource' sort={sort} onChangeSorting={sort => this.redirect({ sort })} />
                <Table.HeaderCell key={1} padding='0' margin='0'>Description</Table.HeaderCell>
                <Table.HeaderCell key={2} padding='0' margin='0'>Phone</Table.HeaderCell>
                <Table.HeaderCell key={3} padding='0' margin='0'>Tags</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {resources.map(r => this.renderRow(r, tagDisplayFilter))}
            </Table.Body>
          </Table>
        </Container>
      </PageLayout>
    )
  }
}

export default withRouter(LegalLinksPage)