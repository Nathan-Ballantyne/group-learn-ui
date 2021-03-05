import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './Chat.module.scss';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

import { auth, firestore, firebase } from '../../config/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// import authHOC from '../../hoc/authHOC'

interface Message {
  createdAt: any;
  photoURL: string;
  text: string;
  uid: string;
  id: string;
}

interface ChatProps {
  groupId: string;
}

const Chat: React.FC<ChatProps> = ({ groupId }) => {
  const router = useRouter();

  const [user, loading, error] = useAuthState(auth);

  console.log('user', user);
  console.log('loading', loading);
  console.log('error', error);

  if (user === null && loading === false) {
    router.push('/login');
  }

  const dummy = useRef<HTMLSpanElement>();
  const messagesRef = firestore
    .collection('chatRooms')
    .doc(groupId)
    .collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e: any) => {
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

  const handleChange = (e: any) => {
    setFormValue(e.target.value);
  };

  const handleKeypress = (e: any) => {
    if (e.charCode === 13) {
      sendMessage(e);
    }
  };

  return (
    <section className={styles.chat_container}>
      <div className={styles.chat_log}>
        {messages &&
          messages.map((msg: Message) => (
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
