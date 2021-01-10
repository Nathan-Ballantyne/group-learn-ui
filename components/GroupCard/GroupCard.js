import PropTypes from 'prop-types';
import styles from './GroupCard.module.scss';
import Link from 'next/link';

const GroupCard = ({ id, title, tags, memberCount, maxMembers }) => {
  return (
    <Link href={`/group/${id}`}>
      <div className={styles.card}>
        <h3>{title}</h3>
        <p>{tags.join(', ')}</p>
        <div>
          Members {memberCount} out of {maxMembers}
        </div>
      </div>
    </Link>
  );
};

GroupCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  memberCount: PropTypes.number,
  maxMembers: PropTypes.number,
};

export default GroupCard;
