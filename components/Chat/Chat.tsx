import React, { useState, useRef } from 'react';
import styles from './Chat.module.scss';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();

const Chat = () => {
  const [user, loading, error] = useAuthState(auth);
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setFormValue(e.target.value);
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      sendMessage(e);
    }
  };

  return (
    <section className={styles.chat_container}>
      <div className={styles.chat_log}>
        {messages &&
          messages.map((msg) => (
            <ChatMessage auth={auth} message={msg} key={msg.id} />
          ))}
        <span ref={dummy}></span>
      </div>

      <ChatInput
        handleKeypress={handleKeypress}
        send={sendMessage}
        messageInput={formValue}
        handleChange={handleChange}
      />
    </section>
  );
};
export default Chat;
