import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnPrivate = nextUrl.pathname.startsWith('/plants');
      if (isOnPrivate) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/plants', nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
