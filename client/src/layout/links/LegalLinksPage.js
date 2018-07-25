
import React from 'react'
import { withRouter } from 'react-router'
import {
  Container,
  Header,
  Form,
  Dropdown,
  Button,
} from 'semantic-ui-react'

import PageLayout from '../components/PageLayout'
import RedirectComponent from '../../components/RedirectComponent'
import {LinksWithTagMatching, GetUniqueTags, DropdownOptionsForTags, TagSearch } from '../../data/LinksData'

const urlParsers = {
  tags: (tags) => (tags ? tags.split(',') : []),
  sort: (sort) => (sort || 1),
}

const urlBuilders = {
  tags: (tags) => (tags.join(','))
}

class LegalLinksPage extends RedirectComponent {
  constructor(props) {
    super(props, '/links/legal', ['sort','tags'], urlParsers, urlBuilders)
  }

  render() {
    const resources = LinksWithTagMatching(/^legal/i);
    const allLegalTags = GetUniqueTags(resources);

    const { tags, sort } = this.urlParams();
    
    return (
      <PageLayout>
        <Container>
          <Header as='h1'>Legal Resources</Header>
          <Form>
            <Form.Input>
              <Dropdown selection multiple placeholder='Filter tags...'
                options={DropdownOptionsForTags(allLegalTags)}
                value={tags} onChange={(e, v) => this.redirect({ tags:v.value })}
                search={TagSearch}
              />
            </Form.Input>
            {(tags.length < 2) ? null :
              <Button onClick={() => this.redirect({ tags: [] })}>Clear filter</Button>
            }
          </Form>
        </Container>
      </PageLayout>
    )
  }
}

export default withRouter(LegalLinksPage)