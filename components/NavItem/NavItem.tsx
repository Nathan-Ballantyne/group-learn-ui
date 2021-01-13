import React from 'react';
import styles from './NavItem.module.scss';
import Link from 'next/link';

interface NavItemProps {
  icon: string;
  alt: string;
  title: string;
  link: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, alt, title, link }) => {
  let itemStyle = '';
  switch (alt) {
    case 'help':
      itemStyle = styles.help;
      break;
    case 'account':
      itemStyle = styles.account;
      break;
    default:
      itemStyle = '';
      break;
  }

  if (alt === 'browse-groups') {
    itemStyle += ' ' + styles.activeItem;
  }

  return (
    <Link href={`/${link}`}>
      <div className={[styles.NavItem, itemStyle].join(' ')}>
        <img src={icon} alt={alt} />
        <span>{title} </span>
      </div>
    </Link>
  );
};
export default NavItem;
