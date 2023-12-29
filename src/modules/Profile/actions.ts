'use server';

import { AuthError } from 'next-auth';

import { signOut } from '@/auth';

export async function logOut() {
  try {
    await signOut();
  } catch (error) {
    if (error instanceof AuthError) {
      return 'Something went wrong.';
    }
    throw error;
  }
}
