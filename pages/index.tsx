import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

export default function Home({ session }) {
  if(!session) {
    return <Login />
  }

  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      <main>
        <Sidebar />
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  return {
    props: {
      session,
    },
  };
}