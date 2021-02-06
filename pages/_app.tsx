import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/globals.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyBoXduZbFzXL1adByGquPANWhY1q0Kl5hQ',
  authDomain: 'my-group-learn-app.firebaseapp.com',
  projectId: 'my-group-learn-app',
  storageBucket: 'my-group-learn-app.appspot.com',
  messagingSenderId: '146198845071',
  appId: '1:146198845071:web:f17c215da007ec0d02c2fa',
  measurementId: 'G-KDLM5NV5RT',
});

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
