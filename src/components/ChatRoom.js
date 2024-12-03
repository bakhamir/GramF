import React, { useState, useEffect } from "react";
import axios from "axios";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  // Загрузка сообщений при загрузке компонента
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/messages/");
      setMessages(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке сообщений:", error);
    }
  };

  const handleNewMessage = async (message) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/messages/", message);
      setMessages([response.data, ...messages]); // Добавить новое сообщение в начало списка
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    }
  };

  return (
    <div>
      <h1>Глобальный чат</h1>
      <MessageForm onSendMessage={handleNewMessage} />
      <MessageList messages={messages} />
    </div>
  );
};

export default ChatRoom;
