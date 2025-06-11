'use client';
import { Button } from '@/components/ui/button';
import { User } from '@/generated/prisma';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const NewProjectButton = (user: User) => {
  // WIP: handle click needs completion
  const router = useRouter();

  return (
    <Button
      disabled={!user.subscription}
      className="rounded-lg font-semibold"
      onClick={() => router.push('/create-page')}
    >
      <Plus />
      New Project
    </Button>
  );
};

export default NewProjectButton;
