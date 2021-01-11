import styles from './NavItem.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';

const NavItem = ({ icon, alt, title, link }) => {
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

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavItem;
