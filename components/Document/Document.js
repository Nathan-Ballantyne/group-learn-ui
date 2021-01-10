import Head from 'next/head';
import SideNav from '../SideNav';

const Document = ({ pageTitle }) => {
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
