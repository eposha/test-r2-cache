import { unstable_cache } from 'next/cache';

const fetcher = unstable_cache(
  async () => {
    return await new Promise((resolve) =>
      setTimeout(() => resolve(Date.now()), 1000)
    );
  },
  ['revalidate'],
  {
    tags: ['revalidate'],
  }
);

const ServerComponent = async () => {
  const date = (await fetcher()) as number;
  return (
    <div>
      <div>date: {date}</div>
      <div>date 2: {Date.now()}</div>
    </div>
  );
};

export default ServerComponent;
