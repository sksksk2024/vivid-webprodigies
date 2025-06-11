'use client';
import { Button } from '@/components/ui/button';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Project } from '@/generated/prisma';
import { useSlideStore } from '@/store/useSlideStore';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';
// Use Prisma's JsonValue type for compatibility
import type { JsonValue } from '@/generated/prisma/runtime/library';

type Props = {
  recentProjects: Project[];
};

const RecentOpen = ({ recentProjects }: Props) => {
  const router = useRouter();
  const { setSlides } = useSlideStore();

  toast('Project not found');
  const handleClick = (projectId: string, slides: JsonValue) => {
    if (!projectId || !slides) {
      toast.error('Project not found', {
        description: 'Please try again',
      });
      return;
    }

    setSlides(JSON.parse(JSON.stringify(slides)));
    router.push(`/presentation/${projectId}`);
  };

  return (
    <>
      {recentProjects.length > 0 ? (
        <SidebarGroup>
          <SidebarGroupLabel>Recently Opened</SidebarGroupLabel>
          <SidebarMenu>
            {recentProjects.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={`hover:bg-primary-80`}
                >
                  <Button
                    variant={'link'}
                    onClick={() => handleClick(item.id, item.slides)}
                    className={`text-xs items-center justify-start`}
                  >
                    <span>{item.title}</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ) : (
        <></>
      )}
    </>
  );
};

export default RecentOpen;
