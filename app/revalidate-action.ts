'use server';

import { revalidateTag, revalidatePath } from 'next/cache';

const revalidateAction = async () => {
  revalidateTag('revalidate');
  revalidatePath('/');
};

export default revalidateAction;
