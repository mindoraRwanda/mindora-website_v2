// app/dashboard/contact/page.tsx
'use client';

import { useState } from 'react';

interface Message {
  id: number;
  name: string;
  email: string;
  content: string;
}

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, name: 'User', email: 'user@example.com', content: 'Hello!' },
  ]);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure?')) setMessages(messages.filter((m) => m.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-600">Contact Messages</h1>
      </div>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">{msg.name}</h2>
            <p className="text-gray-600">{msg.email}</p>
            <p className="text-gray-600 mt-2">{msg.content}</p>
            <div className="mt-4">
              <button
                onClick={() => handleDelete(msg.id)}
                className="text-red-600 hover:underline font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {messages.length === 0 && (
          <p className="text-gray-600 text-center">No messages yet.</p>
        )}
      </div>
    </div>
  );
}