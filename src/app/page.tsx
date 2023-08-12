import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('@/components/ListView'), { ssr: false });

export default function Home() {
  return <NoSSR />;
}
