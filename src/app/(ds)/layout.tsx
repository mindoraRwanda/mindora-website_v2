import Sidebar from '@/components/Sidebar';
import { ReactNode } from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect('/login'); 
  }

  return (
    <div className="flex min-h-screen ">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100">
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-purple-600">Mindora</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">{`${user.family_name} ${user.given_name}`}</span>
            <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 font-bold">
              {user.family_name?.[0] || user.given_name?.[0] || 'U'}
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}