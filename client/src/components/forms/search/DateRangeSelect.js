import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

import 'semantic-ui-calendar-react/dist/css/calendar.min.css';

class DateRangeSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: '',
      endDate: ''
    }

    this.onChangeDate = this.onChangeDate.bind(this);
  }
  onChangeDate(e, {name, value}) {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Form.Input label='Start Date' width={8} labelPosition='left'>
          <Label>Soonest</Label>
          <DateInput
            icon='calendar alternate outline'
            dateFormat='MM-DD-YYYY'
            name='startDate'
            value={this.state.startDate}
            onChange={this.onChangeDate}
            />
        </Form.Input>
        <Form.Input label='&nbsp;' width={8} labelPosition='left'>
          <Label>Latest</Label>
          <DateInput
            icon='calendar alternate outline'
            dateFormat='MM-DD-YYYY'
            name='endDate'
            value={this.state.endDate}
            onChange={this.onChangeDate}
            />
        </Form.Input>
      </React.Fragment>
    )
  }
}

export default DateRangeSelect;
