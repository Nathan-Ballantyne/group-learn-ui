import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import SideNav from '../components/SideNav';
import GroupList from '../components/GroupsList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Group Learn</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SideNav />

      <main className={styles.main}>
        <h1 className={styles.title}>Browse Groups</h1>

        <p className={styles.description}>
          Find Like minded people to learn with
        </p>

        <GroupList />
      </main>

      <footer className={styles.footer}>
        <div>Contact Us</div>
      </footer>
    </div>
  );
}
