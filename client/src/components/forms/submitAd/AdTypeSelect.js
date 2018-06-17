import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Checkbox
} from 'semantic-ui-react';

class AdTypeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'wanted'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, { value }) {
    this.setState({ value });
    this.props.onSelect(value);
  }
  render() {
    return (
      <React.Fragment>
        <Form.Field>
          <label>Ad Type</label>
        </Form.Field>
        <Form.Group inline>
          <Form.Field>
            <Checkbox
              radio
              label='Want housing'
              name='checkboxRadioGroup'
              value='wanted'
              checked={this.state.value === 'wanted'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Offer housing'
              name='checkboxRadioGroup'
              value='offered'
              checked={this.state.value === 'offered'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
      </React.Fragment>
    );
  }
}

AdTypeSelect.propTypes = {
  onSelect: PropTypes.func.isRequired
}

export default AdTypeSelect;
