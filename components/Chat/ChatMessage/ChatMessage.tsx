import React from 'react';
import styles from './ChatMessage.module.scss';

interface ChatMessageProps {
  message: string;
  who: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, who }) => {
  const messageStyle = who ? styles.chat_message__right : styles.chat_message;
  return (
    <div className={messageStyle}>
      <span className={styles.chat_message__avatar_frame}>
        <img
          src='/account.svg'
          alt='avatar'
          className={styles.chat_message__avatar}
          style={{ height: '24px', width: '25px' }}
        />
      </span>
      <p className={styles.chat_message__text}>{message}</p>
    </div>
  );
};
export default ChatMessage;
