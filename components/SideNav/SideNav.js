import styles from './SideNav.module.scss';
import NavItem from '../NavItem';

const SideNav = () => {
  return (
    <div className={styles.SideNav}>
      <h2>Group Learn</h2>
      <NavItem
        icon={'/browse.svg'}
        alt='browse-groups'
        title='Browse Groups'
        link='link to main page'
      />
      <NavItem
        icon={'/classroom.svg'}
        alt='classroom'
        title='Google Classroom'
        link='link to class'
      />
      <NavItem
        icon={'/help.svg'}
        alt='help'
        title='Help &amp; Support'
        link='link to help'
      />
      <NavItem
        icon={'/account.svg'}
        alt='account'
        title='Account'
        link='link to account'
      />
    </div>
  );
};

export default SideNav;
