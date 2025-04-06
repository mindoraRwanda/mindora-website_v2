'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function DashboardHome() {
  const router = useRouter();

  const quickLinks = [
    { name: 'Team', path: '/team' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Service', path: '/service' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Hall of Fame', path: '/hall-of-fame' },
    { name: 'Our Stories', path: '/our-stories' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen overflow-y-auto p-8 bg-gradient-to-b from-gray-50 to-white space-y-10">
      <h1 className="text-4xl font-extrabold text-purple-700">🚀 Welcome to Your Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Team Members', count: 12, subtitle: 'Active members' },
          { title: 'Open Jobs', count: 5, subtitle: 'Current openings' },
          { title: 'Messages', count: 8, subtitle: 'Unread messages' },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <h2 className="text-lg font-medium text-gray-700">{stat.title}</h2>
            <p className="text-4xl font-extrabold text-purple-600 mt-2">{stat.count}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => router.push(link.path)}
              className="flex items-center justify-between bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition-all shadow-sm"
            >
              <span>Manage {link.name}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-gray-600 text-sm pl-4 list-disc">
          <li>✅ Added new team member: <span className="font-medium text-gray-800">Jane Smith</span></li>
          <li>📢 Posted job: <span className="font-medium text-gray-800">Frontend Developer</span></li>
          <li>📖 Updated success story: <span className="font-medium text-gray-800">Project A</span></li>
        </ul>
      </div>
    </div>
  );
}

