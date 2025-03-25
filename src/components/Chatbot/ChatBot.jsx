import React, { useState, useEffect } from 'react';
import './ChatBot.css';
import { Bot } from 'lucide-react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Add initial greeting message
    setMessages([{ text: 'Hi, how can I help you?', sender: 'bot' }]);

    // Hide the initial message after a few seconds
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000); // Adjust the timing as needed

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInput('');
      setTimeout(() => {
        const botReply = { text: `You said: ${input}`, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botReply]);
      }, 500); // Simulate bot response delay
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot-icon ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        <Bot size={50} />
        {showMessage && <div className="chatbot-initial-message">Hi, how can I help you?</div>}
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="chatbot-input-form">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send-button">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;