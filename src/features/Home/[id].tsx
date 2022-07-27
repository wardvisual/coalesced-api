import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Something: NextPage = () => {
  const { query } = useRouter();

  return <div>Something: {query?.id}</div>;
};

export default Something;
