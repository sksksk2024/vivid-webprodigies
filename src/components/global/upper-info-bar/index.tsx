import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { User } from '@/generated/prisma';
import React from 'react';
import SearchBar from './upper-info-searchbar';
import ThemeSwitcher from '../mode-toggle';
import { Button } from '@/components/ui/button';
import NewProjectButton from './new-project-button';
import { Upload } from 'lucide-react';

type Props = {
  user: User;
};

const UpperInfoBar = ({ user }: Props) => {
  return (
    <header className="sticky top-0 z-[10] flex shrink-0 flex-wrap items-center gap-2 bg-background p-4 justify-between">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />

      <div className="w-full max-w-[95%] flex items-center justify-between gap-4 flex-wrap">
        <SearchBar />
      </div>

      <ThemeSwitcher />
      <div className="flex flex-wrap gap-4 items-center justify-end">
        <Button className="bg-primary-80 rounded-lg hover:bg-background-80 text-primary font-semibold cursor-not-allowed">
          <Upload />
          Import
        </Button>
        <NewProjectButton
          name={user.name}
          id={user.id}
          clerkId={user.clerkId}
          email={user.email}
          profileImage={user.profileImage}
          subscription={user.subscription}
          createdAt={user.createdAt}
          updatedAt={user.updatedAt}
          lemonSqueezyApiKey={user.lemonSqueezyApiKey}
          storeId={user.storeId}
          webhookSecret={user.webhookSecret}
        />
      </div>
    </header>
  );
};

export default UpperInfoBar;
