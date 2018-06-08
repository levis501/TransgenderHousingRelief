import React, { Component } from 'react';
import { Form, Dropdown } from 'semantic-ui-react';

import { states, cities } from '../../data/locations';
import { distanceOptions } from '../../data/distance';

const stateOptions = Object.keys(states).map(key => {
    return {
      text: states[key],
      value: states[key]
    }
  }
);

class LocationSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anywhere: false,
      state: '',
      cities: [],
      cachedCities: {}
    }
    this.onClickAnywhereCheckbox = this.onClickAnywhereCheckbox.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeCities = this.onChangeCities.bind(this);
    this.onChangeDistance = this.onChangeDistance.bind(this);
  }
  getCityOptionsFromState(state) {
    const { cachedCities } = this.state;
    if (cachedCities[state]) {
      return cachedCities[state];
    }
    cachedCities[state] = cities.filter(city=>city.state===state).map(city=> {
        return {
          text: city.city,
          value: city.city
        }
      }
    );
    return cachedCities[state];
  }
  onClickAnywhereCheckbox() {
    this.setState({anywhere: !this.state.anywhere});
  }
  onChangeState(e, props) {
    if (props.value === this.state.state) return;
    this.setState({state: props.value, cities: ['']});
  }
  onChangeCities(e, props) {
    this.setState({cities: props.value});
  }
  onChangeDistance(e, props) {
    this.setState({distance: props.value});
  }
  renderCities() {
    const { state } = this.state;
    if (!state) return null;

    const cityOptions = this.getCityOptionsFromState(this.state.state);

    return (
      <Form.Field disabled={this.state.anywhere}>
        <label>Cities</label>
        <Dropdown fluid search selection multiple
          options={cityOptions}
          value={this.state.cities}
          onChange={this.onChangeCities}
          />
      </Form.Field>
    );
  }
  renderDistance() {
    if (!this.state.state) return null;
    return (
      <Form.Field disabled={this.state.anywhere}>
        <label>Distance</label>
        <Dropdown search fluid selection
          options={distanceOptions}
          value={this.state.distance}
          onChange={this.onChangeDistance}
        />
      </Form.Field>
    );
  }
  render() {
    return (
    <React.Fragment>
      <Form.Checkbox label='Anywhere'
        checked={this.state.anywhere}
        onClick={this.onClickAnywhereCheckbox}
        />
      <Form.Field disabled={this.state.anywhere}>
        <label>State</label>
        <Dropdown search fluid selection
          placeholder='State'
          options={stateOptions}
          value={this.state.state}
          onChange={this.onChangeState}
        />
      </Form.Field>
      {
        this.renderCities()
      }
      {
        this.renderDistance()
      }
    </React.Fragment>
    )
  }
}

export default LocationSelect;
