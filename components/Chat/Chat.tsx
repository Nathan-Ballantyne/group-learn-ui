import styles from './Chat.module.scss';

const Chat = () => {
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
