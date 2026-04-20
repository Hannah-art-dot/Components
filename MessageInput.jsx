import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const send = () => {
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <div className="message-input">
      <input 
        type="text" 
        value={text} 
        onChange={e => setText(e.target.value)} 
        placeholder="Type your message..." 
        onKeyPress={e => e.key === 'Enter' ? send() : null}
      />
      <button onClick={send}>Send</button>
    </div>
  );
};

export default MessageInput;
