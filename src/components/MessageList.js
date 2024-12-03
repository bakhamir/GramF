import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => (
        <div key={message.id} style={{ marginBottom: "10px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
          <strong>{message.username}</strong>: {message.content}
          <div style={{ fontSize: "0.8em", color: "#888" }}>
            {new Date(message.timestamp).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
