import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

import 'semantic-ui-calendar-react/dist/css/calendar.min.css';

class DateSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: ''
    }
    this.onChangeDate = this.onChangeDate.bind(this);
  }
  onChangeDate(e, {value}) {
    this.setState({ startDate: value });
  }
  render() {
    return (
      <React.Fragment>
        <Form.Input label='Date First Available' labelPosition='left'>
          <DateInput
            icon='calendar alternate outline'
            dateFormat='MM-DD-YYYY'
            name='startDate'
            value={this.state.startDate}
            onChange={this.onChangeDate}
            />
        </Form.Input>
      </React.Fragment>
    )
  }
}

export default DateSelect;
