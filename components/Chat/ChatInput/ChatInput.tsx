import React from 'react';
import styles from './ChatInput.module.scss';

interface ChatInputProps {
  handleKeypress: (e: any) => void;
  send: (e: any) => Promise<void>;
  messageInput: string;
  handleChange: (e: any) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  handleKeypress,
  send,
  messageInput,
  handleChange,
}) => {
  return (
    <div className={styles.chat_input_area}>
      <input
        type='text'
        placeholder='Type Message...'
        className={styles.chat_input_area__input}
        onKeyPress={handleKeypress}
        value={messageInput}
        onChange={handleChange}
      />
      <button
        className={styles.chat_input_area__submit_button}
        onClick={send}
      ></button>
    </div>
  );
};
export default ChatInput;
