
import React, { Component } from 'react'
import PropTypes from "prop-types"
import { withRouter } from 'react-router-dom'
import {
  Container,
  Header,
  Form,
  Dropdown,
  Button,
} from 'semantic-ui-react'

import PageLayout from '../components/PageLayout'
import {LinksWithTagMatch, GetUniqueTags, DropdownOptionsForTags, TagSearch, UniqueSortTags } from '../../data/LinksData'

class LegalLinksPage extends Component {
  constructor(props) {
    super(props)
    this.setSelectedTags = this.setSelectedTags.bind(this)
    this.clearFilter = () => this.setSelectedTags([]);
  }

  generateUrl(sort, tags) {
    return `/links/legal/${sort}/${tags}`;
  }

  redirect(sort, tags) {
    this.context.router.history.push(this.generateUrl(sort, UniqueSortTags(tags)));
  }

  parseUrlParams() {
    const params = this.props.match.params;
    const selectedTags = params.selectedTags ? params.selectedTags.split(',') : []
    const sort = params.sort || 1
    return { sort, selectedTags };
  }

  setSelectedTags(selectedTags) {
    const {sort} = this.parseUrlParams()
    this.redirect(sort, selectedTags);
  }

  render() {
    const resources = LinksWithTagMatch(/^legal/i);
    const allLegalTags = GetUniqueTags(resources);

    const params = this.props.match.params;
    const selectedTags = params.selectedTags ? params.selectedTags.split(',') : []
    const sort = params.sort || 1

    
    return (
      <PageLayout>
        <Container>
          <Header as='h1'>Legal Resources</Header>
          <Form>
            <Form.Input>
              <Dropdown selection multiple placeholder='Filter tags...'
                options={DropdownOptionsForTags(allLegalTags)}
                value={selectedTags} onChange={(e, v) => this.setSelectedTags(v.value)}
                search={TagSearch}
              />
            </Form.Input>
            {(selectedTags.length < 2) ? null :
              <Button onClick={this.clearFilter}>Clear filter</Button>
            }
          </Form>
        </Container>
      </PageLayout>
    )
  }
}

LegalLinksPage.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired
    }).isRequired,
    staticContext: PropTypes.object
  }).isRequired
}

export default withRouter(LegalLinksPage)