import React from 'react';
import {
  Dropdown,
  Form
} from 'semantic-ui-react';

const dayOptions = new Array(31);
for (let i = 0; i < 31; ++i) {
  dayOptions[i] = { value: (i + 1), text: (i + 1) };
}
const monthOptions = [
  { value: 1, text: 'January' },
  { value: 2, text: 'Feburary' },
  { value: 3, text: 'March' },
  { value: 4, text: 'April' },
  { value: 5, text: 'May' },
  { value: 6, text: 'June' },
  { value: 7, text: 'July' },
  { value: 8, text: 'August' },
  { value: 9, text: 'September' },
  { value: 10, text: 'October' },
  { value: 11, text: 'November' },
  { value: 12, text: 'December' }
];
const numYearOptions = 100;
const currentYear = (new Date()).getFullYear();
const yearOptions = new Array(numYearOptions);
let year;
for (let i = 0; i < numYearOptions; ++i) {
  year = currentYear - (i + 1);
  yearOptions[i] = { value: year, text: year };
}

const BirthDateInput = () => (
  <Form.Field>
    <Form.Group widths='equal'>
      <Form.Field>
        <label>Month</label>
        <Dropdown search selection options={monthOptions} />
      </Form.Field>
      <Form.Field>
        <label>Day</label>
        <Dropdown search selection options={dayOptions} />
      </Form.Field>
      <Form.Field>
        <label>Year</label>
        <Dropdown search selection options={yearOptions} />
      </Form.Field>
    </Form.Group>
  </Form.Field>
);

export default BirthDateInput;
