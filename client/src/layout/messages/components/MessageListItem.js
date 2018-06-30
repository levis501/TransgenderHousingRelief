import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Grid,
  Checkbox
} from 'semantic-ui-react';

const baseStyle = {
  marginLeft: '0.25em',
  marginRight: '0.25em'
}
const evenStyle = {
  backgroundColor: '#f7f7f7',
  cursor: 'auto'
}
const evenStyleHover = {
  backgroundColor: '#fafafa',
  cursor: 'pointer'
}
const oddStyle = {
  backgroundColor: '#e8e8e8',
  cursor: 'auto'
}
const oddStyleHover = {
  backgroundColor: '#ebebeb',
  cursor: 'pointer'
}

const subtitleStyle = {
  color: 'black',
  fontWeight: 'bold',
  lineHeight: '1em',
  marginBottom: '0.5em'
}
const textStyle = {
  color: 'black',
  lineHeight: '1em'
}
class MessageListItem extends React.Component {
  static propTypes = {
    isEven: PropTypes.bool,
    message: PropTypes.object,
    onOpen: PropTypes.func,
    onCheck: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }
  render() {
    const {isEven, onOpen, onCheck, message} = this.props;
    const {subject, snippet, sender, date, checked} = message;
    const {hover} = this.state;
    return (
      <Grid style={{...baseStyle, ...(isEven ? (hover ? evenStyleHover : evenStyle) : (hover ? oddStyleHover : oddStyle))}}>
        <Grid.Row>
          <Grid.Column width={1} textAlign='center'>
            <Checkbox checked={checked}
              onChange={()=>onCheck(message)}
              style={{marginTop: '1.5em'}}
              />
          </Grid.Column>
          <Grid.Column mobile={14} tablet={15} computer={15} largeScreen={15}
            as='a' onClick={() => onOpen(message)}
            onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={12}>
                  <Header style={{marginBottom: '0.25em'}}>
                    {subject ? subject : '<no subject>'}
                  </Header>
                </Grid.Column>
                <Grid.Column width={4} textAlign='right'>
                  <p style={subtitleStyle}>{date}</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <p style={subtitleStyle}>From {sender}</p>
            <p style={textStyle}>{snippet}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}


export default MessageListItem;
