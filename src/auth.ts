import NextAuth from 'next-auth';

import { providers } from './api/auth/providers';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers,
});
