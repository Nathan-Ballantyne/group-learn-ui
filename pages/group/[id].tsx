import React from 'react';
import Document from '../../components/Document';
import { useRouter } from 'next/router';
import Chat from '../../components/Chat';
import mockGroups from '../../mock/groupLists';

interface GroupProps {}

const Group: React.FC<GroupProps> = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const group = mockGroups.find((group) => group.id === Number(id));
  const groupName = group.title;
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