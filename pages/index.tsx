import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

export default function Home({ session }) {
  if(!session) {
    return <Login />
  }

  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
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
