import dynamic from 'next/dynamic';
import { getSession } from 'next-auth/react';

const HomeFormPage = dynamic(() => import('@/components/HomeFormPage'), { ssr: false });

export default function Home({ session }) {
  if (!session) return <p>ログインが必要です</p>;
  return <HomeFormPage session={session} />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return { props: { session } };
}