import React from 'react';
import styles from './Chat.module.scss';
interface ChatProps {}

const Chat: React.FC<ChatProps> = ({}) => {
  return (
    <div className={styles.Chat}>
      <input
        className={styles.textBar}
        type='textarea'
        placeholder='Type Message'
      />
    </div>
  );
};
export default Chat;
