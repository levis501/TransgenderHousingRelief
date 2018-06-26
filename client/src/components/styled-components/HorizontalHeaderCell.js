import React from 'react';
import { Table } from 'semantic-ui-react';

const headerCellStyle = {
  fontWeight: 'bold'
};

const HorizontalHeaderCell = ({children}) => (
  <Table.Cell
    width={4}
    style={headerCellStyle}>
    {children}
  </Table.Cell>
);

export default HorizontalHeaderCell;
