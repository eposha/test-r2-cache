'use client';

import revalidateAction from './revalidate-action';

const RevalidateButton = () => {
  return <button onClick={revalidateAction}>Revalidate</button>;
};

export default RevalidateButton;
