import React from 'react'
import {
  Icon,
  Table,
} from 'semantic-ui-react'

const SortingHeader = (props) => (
  <Table.HeaderCell key='0' padding='0' margin='0'
    onClick={() => props.onChangeSorting(props.sort > 0 ? -1 : 1)} >
    {props.title}
    <Icon name={(props.sort > 0) ? 'arrow down' : 'arrow up'} />
  </Table.HeaderCell >
)

export default SortingHeader
