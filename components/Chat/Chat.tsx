import React, { useState, useRef, useEffect } from 'react';
import styles from './Chat.module.scss';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

import { sendMsg } from '../../websocket';

interface ChatProps {
  chatHistory: string[];
}

const Chat: React.FC<ChatProps> = ({ chatHistory }) => {
  const [messageInput, setMessageInput] = useState<string>('');
  const [who, setWho] = useState<boolean>(false);

  const send = () => {
    sendMsg(messageInput);
    setMessageInput('');
  };

  const handleChange = (e) => {
    setMessageInput(e.target.value);
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      send();
    }
  };

  return (
    <section className={styles.chat_container}>
      <div className={styles.chat_log}>
        {chatHistory.map((msg, index) => (
          <ChatMessage who={who} message={msg} key={index} />
        ))}
      </div>

      <ChatInput
        handleKeypress={handleKeypress}
        send={send}
        messageInput={messageInput}
        handleChange={handleChange}
      />
    </section>
  );
};
export default Chat;
