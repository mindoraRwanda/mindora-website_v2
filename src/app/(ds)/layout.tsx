// app/dashboard/layout.tsx
import Sidebar from '@/components/Sidebar';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-purple-600">Mindora</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Admin User</span>
            <div className="h-10 w-10 rounded-full bg-purple-200" /> 
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}