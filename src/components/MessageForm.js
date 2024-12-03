import React, { useState } from "react";

const MessageForm = ({ onSendMessage }) => {
  const [content, setContent] = useState("");
  const [username, setUsername] = useState(`anon#${Math.floor(Math.random() * 1000000)}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSendMessage({ username, content });
      setContent(""); // Очистить поле после отправки
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={username}
        readOnly
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="text"
        placeholder="Введите сообщение..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ padding: "5px", width: "60%" }}
      />
      <button type="submit" style={{ padding: "5px 10px" }}>Отправить</button>
    </form>
  );
};

export default MessageForm;
