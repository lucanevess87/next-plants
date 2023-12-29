import { Button } from '@/components/ui/button';

import { logOut } from './actions';

export const Profile = () => {
  return (
    <form action={logOut}>
      <Button type="submit">Logout</Button>
    </form>
  );
};
