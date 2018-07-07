import React from 'react';
import PropTypes from 'prop-types';

import NoMessages from './NoMessages';
import MessageListItem from './MessageListItem';
import MessageListMenu from './MessageListMenu';

const exampleMessageData = {
  id: '112983yu34983yu4',
  subject: 'Hi',
  body: 'Hello world, how is the world today?',
  snippet: 'Hello world...',
  sender: 'Someone',
  date: '1/1/2018'
}
const exampleMessageData2 = {
  id: 'yifj83f235e03f3',
  subject: '',
  body: 'Uhm, world? Are you still there?',
  snippet: 'Uhm, world?...',
  sender: 'Someone',
  date: '1/1/2018'
}

class MessageList extends React.Component {
  static propTypes = {
    inboxType: PropTypes.string,
    onOpenMessage: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        exampleMessageData,
        exampleMessageData2
      ]
    }
    this.onClickMessage = this.onClickMessage.bind(this);
    this.onDeleteMessage = this.onDeleteMessage.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onCheckAll = this.onCheckAll.bind(this);
    this.hasCheckedItem = this.hasCheckedItem.bind(this);
  }
  onClickMessage(id) {
    this.setState({selectedMessageId: id});
  }
  onCheckAll() {
    console.log('check all');
    const messages = this.state.messages.map(o => {
      o.checked = true;
      return o;
    });
    this.setState({
      messages
    });
  }
  onDeleteMessage() {
    console.log('delete messages here');
  }
  onCheck(message) {
    const messages = this.state.messages;
    const index = this.state.messages.findIndex(o => o.id === message.id);
    messages[index].checked = !messages[index].checked;
    this.setState({
      messages
    });
  }
  hasCheckedItem() {
    return (-1 !== this.state.messages.findIndex(o=>o.checked));
  }
  render() {
    const {messages} = this.state;
    if (!messages || messages.length === 0) {
      return (<NoMessages/>);
    }
    return (
      <React.Fragment>
        <MessageListMenu
          inboxType={this.props.inboxType}
          onSelectAll={this.onCheckAll}
          onDelete={this.onDeleteMessage}
          hasSelection={this.hasCheckedItem()}
          />
        {
          messages.map((item, i) => (
            <MessageListItem key={item.id}
              isEven={i%2 === 0}
              message={item}
              onOpen={this.props.onOpenMessage}
              onCheck={this.onCheck}
              />
            )
          )
        }
      </React.Fragment>
    )
  }
}

export default MessageList;
