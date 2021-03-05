import { firebase, auth } from '../../../config/firebase';
import 'firebase/firestore';
import 'firebase/auth';

import { useRouter } from 'next/router';

import { GoogleButton } from '../../Buttons';

const GoogleSignIn = () => {
  const router = useRouter();
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((res) => {
      if (res.user !== null) {
        router.push('/');
      }
    });
  };

  return (
    <GoogleButton
      click={signInWithGoogle}
      icon='/btn_google_dark_normal_ios.svg'
      alt='Sign in with Google'
      title='Sign in with Google'
    />
  );
};

function GoogleSignOut() {
  return (
    auth.currentUser && (
      <button className='sign-out' onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export { GoogleSignIn, GoogleSignOut };
