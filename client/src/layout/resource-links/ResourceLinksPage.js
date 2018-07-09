import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PageLayout from '../components/PageLayout';
import { Link, withRouter } from 'react-router-dom';
import ResourceLinks from './ResourceLinks';


const legalProps = {
  title: 'Legal Resources',
  recordDisplayFilter: record => record.tags.some(tag => tag.match(/^legal-/i)),
  tagDisplayFilter: tag => !tag.match(/^(legal-|us|housing)/i),
}

const housingProps = {
  title: 'Housing Resources',
  recordDisplayFilter: record => !record.tags.some(tag => tag.match(/^legal-/i)),
  tagDisplayFilter: tag => !tag.match(/^(housing|us)/i)
}

class ResourceLinksPage extends Component {  
  render() {
    const params = this.props.match.params;
    const props = {
      ...(params.resource === 'legal' ? legalProps : housingProps),
      sortDirection: params.sort === '-' ? -1 : 1,
      selectedTags: params.tags ? params.tags.split(',') : null,
    }
    return (
        <ResourceLinks {...props} />)
  
  }
}

export default withRouter(ResourceLinksPage)