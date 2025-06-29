'use client';

import { useAuth } from '@/lib/auth';
import { Navigation } from '@/components/ui/navigation';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !user && pathname !== '/login' && pathname !== '/') {
      router.push('/login');
    }
  }, [user, isLoading, router, pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {user && <Navigation />}
      <main className={user ? 'min-h-[calc(100vh-4rem)]' : 'min-h-screen'}>
        {children}
      </main>
    </div>
  );
}