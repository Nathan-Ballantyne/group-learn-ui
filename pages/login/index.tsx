import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Login.module.scss';

import { auth } from '../../config/firebase';
import {
  GoogleSignIn,
  GoogleSignOut,
} from '../../components/Authentication/SignInAndOut';

function signInOrOut(user: any, loading: boolean) {
  if (user === null && loading === false) {
    return <GoogleSignIn />;
  }
  return <GoogleSignOut />;
}

import { useAuthState } from 'react-firebase-hooks/auth';

const Login: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/icon.svg' />
      </Head>
      <div className={styles.main}>
        <div className={styles.signUpContainer}>
          <h3>Welcome to Group Learn!</h3>
          <h4>Sign up here</h4>

          <h4>Already have an account? Login here</h4>
          <p>Or login with Google</p>
          <GoogleSignIn />
        </div>
      </div>
    </>
  );
  return <h2>{user ? 'Log out' : 'Login'}</h2>;
};
export default Login;
