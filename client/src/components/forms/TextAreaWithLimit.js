import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TextArea
} from 'semantic-ui-react';

class TextAreaWithLimit extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e, props) {
    this.props.onChange(
      props.value,
      props.value.length > this.props.characterLimit
    );
  }
  isOverLimit() {
    return (this.props.value.length > this.props.characterLimit);
  }
  renderCharacterLimit() {
    return (
      <label style={{
          color: (this.isOverLimit() ? 'red' : 'inherit'),
          textAlign: 'right'
        }}>
        Characters: {this.props.value.length}/{this.props.characterLimit}
      </label>
    );
  }
  render() {
    return (
      <React.Fragment>
        <label>Body</label>
        <TextArea style={{ minHeight: this.props.minHeight }}
          value={this.props.value}
          onChange={this.onChange}
        />
        {this.renderCharacterLimit()}
      </React.Fragment>
    )
  }
}

TextAreaWithLimit.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  minHeight: PropTypes.number,
  characterLimit: PropTypes.number
};

TextAreaWithLimit.defaultProps = {
  minHeight: 250,
  characterLimit: 1000
};

export default TextAreaWithLimit;
