import React from 'react';

const ChatWindow = ({ messages, currentUser }) => {
  return (
    <div className="chat-window">
      <div className="messages-list">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.senderId === currentUser.id ? 'sent' : 'received'}`}>
            <p><strong>{msg.senderName}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
