'use server';

import { createUser } from '@/api/auth';

import { RegisterFormType } from '.';

export async function createUserMutation({ email, password, name }: RegisterFormType) {
  try {
    await createUser({ email, name, password });
  } catch (error) {
    if (error) {
      return 'Something went wrong.';
    }
    throw error;
  }
}
