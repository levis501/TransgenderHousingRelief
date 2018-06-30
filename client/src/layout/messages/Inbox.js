import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './components/MessageList';
import MessageViewer from './components/MessageViewer';

const Inbox = ({inboxType, onOpenMessage, onCloseMessage, message}) => {
  if (message) {
    return (
      <MessageViewer message={message} onClose={onCloseMessage} />
    );
  }
  return (
    <MessageList
      inboxType={inboxType}
      onOpenMessage={onOpenMessage}
      />
  );
}

Inbox.propTypes = {
  inboxType: PropTypes.string,
  onOpenMessage: PropTypes.func,
  onCloseMessage: PropTypes.func,
  message: PropTypes.string
}

export default Inbox;
