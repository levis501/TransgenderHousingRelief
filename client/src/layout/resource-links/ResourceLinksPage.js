import React from 'react';
import {
  Container,
  Header,
  Table,
  Label,
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import resources from '../../data/legal-housing-resources.json';

const HasMatchingTag = (tags, regularExpression) => {
  window.dbg = { re: regularExpression, tags };
  const result = tags.reduce((accumulator, tag) => {
    return accumulator || tag.match(regularExpression);
  }, false);
  return result;
}

// Render a row if it contains a tag matching select
const Row = (row, select, skip) => {
  if (!HasMatchingTag(row.tags, select)) {
    return null;
  }
  if (skip && HasMatchingTag(row.tags, skip)) {
    return null;
  }
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
        {row.tags.map((t) => t.match(select) ? null : (<Label className='tableCellLabel'>{t}</Label>))}
      </Table.Cell>
    </Table.Row >
  )
};

const ResourceLinks = (props) => {
  const headerText = ["Resource Name", "Description", "Phone Number", "Tags"];
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          {headerText.map((t) => (<Table.HeaderCell key={t}>{t}</Table.HeaderCell>))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.items.map((item) => Row(item, props.select, props.skip))}
      </Table.Body>
    </Table>
  )
}

const ResourceLinksPage = (props) => (
  <PageLayout>
    <Container>
      <Header as='h1'>{props.title}</Header>
      <ResourceLinks items={resources} select={props.select} skip={props.skip}/>
    </Container>
  </PageLayout>
)

export default ResourceLinksPage;
