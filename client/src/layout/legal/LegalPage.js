import React, { Component } from 'react';
import {
  Container,
  Header,
  Table,
  Label,
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import resources from '../../data/legal-housing-resources.json';
// import TagSelect from '../../components/search/TagSelect';
// import Search from '../../components/search/Search';
// import SearchResults from '../../components/search/SearchResults';

// const Item = (item) => {
//   return (
//     <td>{item}</td>
//   );
// }


// Filter out all rows with 'legal-help' in them
const Row = (row) => {
  return (row.tags.indexOf('legal-help') < 0) ? null : (
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
        {row.tags.map((t) => (t === "legal-help") ? null : (<Label>{t}</Label>))}
      </Table.Cell>
    </Table.Row >    
  )
};
    
const LegalResults = (props) => {

  // Ordered mapping of database title names to 
  const headerText = ["Resource Name", "Description", "Phone Number", "Tags"];
  
  const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]))
  

  // const titles = ["a", "b", "c", "d"];
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          {headerText.map((t) => (<Table.HeaderCell>{t}</Table.HeaderCell>))}
        </Table.Row>  
      </Table.Header>
      <Table.Body>
        {props.items.map((item) => Row(item))}
      </Table.Body>
    </Table>  
  )
  //   return (
  //   <table>

  //   </table>
  // );
}

class LegalPage extends Component {
  render() {
    return (
      <PageLayout>
        <Container>
          <Header as='h1'>Legal Resources</Header>
          <LegalResults items={resources}/>
          {/* <pre>
            {JSON.stringify(resources, null, 2)}
          </pre>   */}
          {/* <TagSelect /> */}
          {/* <Search />
          <SearchResults /> */}
        </Container>
      </PageLayout>
    );
  }
}

export default LegalPage;
