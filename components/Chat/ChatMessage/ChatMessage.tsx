import React from 'react';
import styles from './ChatMessage.module.scss';

interface ChatMessageProps {
  message: any;
  auth: any;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, auth }) => {
  const { text, uid, photoURL } = message;
  const messageStyle =
    uid === auth?.currentUser?.uid
      ? styles.chat_message__right
      : styles.chat_message;
  return (
    <div className={messageStyle}>
      <span className={styles.chat_message__avatar_frame}>
        <img
          src={photoURL}
          alt='avatar'
          className={styles.chat_message__avatar}
          style={{ height: '24px', width: '25px' }}
        />
      </span>
      <p className={styles.chat_message__text}>{text}</p>
    </div>
  );
};
export default ChatMessage;
