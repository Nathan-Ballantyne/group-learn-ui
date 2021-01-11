import GroupCard from '../GroupCard';
import mockGroupList from '../../mock/groupLists';
import styles from './GroupList.module.scss';

const GroupList = () => {
  return (
    <div className={styles.GroupList}>
      <div style={{ marginLeft: '1.6rem' }}>Recomended Groups</div>
      <div className={styles.grid}>
        {mockGroupList.map((card) => (
          <GroupCard
            key={card.id}
            id={card.id}
            title={card.title}
            tags={card.tags}
            memberCount={card.memberCount}
            maxMembers={card.maxMembers}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupList;
