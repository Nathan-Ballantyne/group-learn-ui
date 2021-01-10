import Document from '../../components/Document';
import { useRouter } from 'next/router';
import Chat from '../../components/Chat';
import mockGroups from '../../mock/groupLists';

const Group = () => {
  const router = useRouter();
  const { id } = router.query;
  const groupName = mockGroups.find((group) => group.id === id);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Document pageTitle='Chat' />
      <h2>{groupName}</h2>
      <Chat />
    </div>
  );
};

export default Group;
