export const dynamic = 'force-dynamic'; // It makes layout refresh on every request
import { onAuthenticateUser } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = async (props: Props) => {
  const auth = await onAuthenticateUser();
  if (!auth.user) redirect('/sign-in');
  return <div className="w-full min-h-screen">{props.children}</div>;

  return <div>Layout</div>;
};

export default Layout;
