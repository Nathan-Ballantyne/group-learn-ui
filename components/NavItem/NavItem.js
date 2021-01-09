import styles from './NavItem.module.scss';
import PropTypes from 'prop-types';

const NavItem = ({ icon, alt, title, link }) => {
  return (
    <div className={styles.NavItem}>
      <img src={icon} alt={alt} />
      <span>{title} </span>
    </div>
  );
};

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavItem;
