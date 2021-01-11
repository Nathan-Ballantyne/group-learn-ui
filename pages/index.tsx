import styles from '../styles/Home.module.scss';
import Document from '../components/Document';
import GroupList from '../components/GroupsList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Document pageTitle='Group Learn' />

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
