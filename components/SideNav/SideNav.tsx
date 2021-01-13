import React from 'react';
import styles from './SideNav.module.scss';
import NavItem from '../NavItem';

interface SideNavProps {}

const SideNav: React.FC<SideNavProps> = ({}) => {
  return (
    <div className={styles.SideNav}>
      <h2>Group Learn</h2>
      <NavItem
        icon={'/browse.svg'}
        alt='browse-groups'
        title='Browse Groups'
        link=''
      />
      <div className={styles.resources}>
        <div>Resources</div>
        <NavItem
          icon={'/classroom.svg'}
          alt='classroom'
          title='Google Classroom'
          link='create-class'
        />
      </div>
      <NavItem
        icon={'/help.svg'}
        alt='help'
        title='Help &amp; Support'
        link='help-support'
      />
      <NavItem
        icon={'/account.svg'}
        alt='account'
        title='Account'
        link='account-profile'
      />
    </div>
  );
};
export default SideNav;
