
import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Container,
  Header,
  Form,
  Dropdown,
  Table,
} from 'semantic-ui-react'
import PageLayout from '../components/PageLayout'
import RedirectComponent from '../../components/RedirectComponent'
import SortingHeader from './SortingHeader';
import { LinksWithNoTagMatching, GetUniqueTags, DropdownOptionsForTags, LocationSearch, DropdownOption, TagMatch } from '../../data/LinksData'
import { states } from '../../data/locations'


const urlParsers = {
  sort: (sort) => (sort || 1),
  location: (location) => (location || 'any')
}

class HousingLinksPage extends RedirectComponent {
  constructor(props) {
    super(props, '/links/housing', ['sort', 'location'], urlParsers)
  }

  renderRow(resource) {
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
      </Table.Row >
    )
  }

  render() {
    const { location, sort } = this.urlParams()
    const allHousingResources = LinksWithNoTagMatching(/^legal/i).sort((r1, r2) => sort * r1.name.localeCompare(r2.name))
    const allHousingTags = GetUniqueTags(allHousingResources)

    const optionsForAllTags = DropdownOptionsForTags(allHousingTags)
    const statesMatchingTags = Object.values(states).filter(
      (state) => (LocationSearch(optionsForAllTags, state).length > 0)
    )

    const options = [DropdownOption('Any Location','any')].concat(DropdownOptionsForTags(statesMatchingTags))

    const resources = (location === 'any') ? allHousingResources : allHousingResources.filter(
      (resource) => (resource.tags.some((tag) => TagMatch(tag, location))))

    return (
      <PageLayout>
        <Container>
          <Header as='h1'>Housing Resources</Header>
          <Form>
            <Form.Input>
              <Dropdown selection
                options={options}
                value={location} onChange={(e, v) => this.redirect({ location: v.value })}
                search={LocationSearch}
              />
            </Form.Input>
          </Form>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <SortingHeader key={0} title='Housing Resource' sort={sort} onChangeSorting={sort => this.redirect({ sort })} />
                <Table.HeaderCell key={1} padding='0' margin='0'>Description</Table.HeaderCell>
                <Table.HeaderCell key={2} padding='0' margin='0'>Phone</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {resources.map(r => this.renderRow(r))}
            </Table.Body>
          </Table>
        </Container>
      </PageLayout>
    )
  }
}

export default withRouter(HousingLinksPage)
