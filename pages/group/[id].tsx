import React, { useEffect, useState } from 'react';
import Document from '../../components/Document';
import { useRouter } from 'next/router';
import Chat from '../../components/Chat';
import mockGroups from '../../mock/groupLists';

interface GroupProps {}

const Group: React.FC<GroupProps> = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const group = mockGroups.find((group) => group.id === id);
  const groupName = group?.title || 'Group Chat';

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
      <Chat groupId={String(id)} />
    </div>
  );
};
export default Group;
