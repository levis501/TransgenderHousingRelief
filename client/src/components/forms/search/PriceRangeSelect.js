import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react';

class PriceRangeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceFrom: '',
      priceTo: ''
    }
    this.onPriceFromChanged = this.onPriceFromChanged.bind(this);
    this.onPriceToChanged = this.onPriceToChanged.bind(this);
  }
  onPriceFromChanged(e) {
    this.setState({priceFrom: e.target.value});
  }
  onPriceToChanged(e) {
    this.setState({priceTo: e.target.value});
  }
  render() {
    return (
      <React.Fragment>
        <Form.Input label='Price' width={8} labelPosition='left' type='text'>
          <Label>From</Label>
          <input value={this.state.priceFrom} onChange={this.onPriceFromChanged} />
        </Form.Input>
        <Form.Input label='&nbsp;' width={8} labelPosition='left' type='text'>
          <Label>To</Label>
          <input value={this.state.priceTo} onChange={this.onPriceToChanged} />
        </Form.Input>
      </React.Fragment>
    )
  }
}

export default PriceRangeSelect;
