import React from 'react';
import styles from './GroupCard.module.scss';
import Link from 'next/link';

interface GroupCardProps {
  id: number;
  title: string;
  tags: string[];
  memberCount: number;
  maxMembers: number;
}

const GroupCard: React.FC<GroupCardProps> = ({
  id,
  title,
  tags,
  memberCount,
  maxMembers,
}) => {
  const groupTags: string = tags.join(', ');
  return (
    <Link href={`/group/${id}`}>
      <div className={styles.card}>
        <h3>{title}</h3>
        <p>{groupTags}</p>
        <div>
          Members {memberCount} out of {maxMembers}
        </div>
      </div>
    </Link>
  );
};
export default GroupCard;
