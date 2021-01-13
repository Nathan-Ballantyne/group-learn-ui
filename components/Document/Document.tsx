import React from 'react';
import Head from 'next/head';
import SideNav from '../SideNav';

interface DocumentProps {
  pageTitle: string;
}

const Document: React.FC<DocumentProps> = ({ pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/icon.svg' />
      </Head>

      <SideNav />
    </>
  );
};
export default Document;
