'use client';

import { useState } from 'react';
import {
  Users,
  Briefcase,
  Wrench,
  Trophy,
  Star,
  BookOpen,
  Mail,
  ChevronLeft,
  ChevronRight,
  LogOut,
  LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Jobs', href: '/jobs', icon: Briefcase },
    { name: 'Service', href: '/service', icon: Wrench },
    { name: 'Success Stories', href: '/success-stories', icon: Trophy },
    { name: 'Hall of Fame', href: '/hall-of-fame', icon: Star },
    { name: 'Our Stories', href: '/our-stories', icon: BookOpen },
    { name: 'Contact', href: '/contact-msg', icon: Mail },
  ];

  return (
    <div
      className={cn(
        'flex flex-col h-screen bg-gray-900 text-white transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Logo/Brand Section */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!isCollapsed && (
          <span className="text-xl font-bold">MINDORA</span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-full hover:bg-gray-800 focus:outline-none"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex items-center p-2 my-1 rounded-lg hover:bg-gray-800 transition-colors',
              isCollapsed ? 'justify-center' : 'space-x-3'
            )}
          >
            <item.icon
              size={20}
              className={cn(isCollapsed && 'w-5 h-5')}
            />
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-2 border-t border-gray-800">
        <button
          className={cn(
            'flex items-center w-full p-2 rounded-lg hover:bg-gray-800 transition-colors',
            isCollapsed ? 'justify-center' : 'space-x-3'
          )}
        >
          <LogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;