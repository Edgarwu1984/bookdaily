import React from 'react';
import './Message.scss';

function Message({ type, children }) {
  return (
    <div className={`message_container ${type}`}>
      <div className='content'>{children}</div>
    </div>
  );
}

Message.defaultProps = {
  type: 'info',
  children: 'Empty Message...',
};

export default Message;
