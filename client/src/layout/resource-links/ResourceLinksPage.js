import React, { Component } from 'react';
import {
  Container,
  Header,
  Table,
  Label,
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import resources from '../../data/legal-housing-resources.json';

// Render a row if it contains a tag matching filter 
const Row = (row, filter) => {
  return (row.tags.indexOf(filter) < 0) ? null : (
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
        {/* Don't display the tag associated with the filter, since it is redundant */}
        {row.tags.map((t) => (t === filter) ? null : (<Label class='tableCellLabel'>{t}</Label>))}
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
          {headerText.map((t) => (<Table.HeaderCell>{t}</Table.HeaderCell>))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.items.map((item) => Row(item, props.filter))}
      </Table.Body>
    </Table>
  )
}

const ResourceLinksPage = (props) => (
  <PageLayout>
    <Container>
      <Header as='h1'>{props.title}</Header>
      <ResourceLinks items={resources} filter={props.filter}/>
    </Container>
  </PageLayout>
)

export default ResourceLinksPage;
