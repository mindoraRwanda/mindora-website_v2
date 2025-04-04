// app/dashboard/hall-of-fame/page.tsx
'use client';

import { useState } from 'react';

interface FameEntry {
  id: number;
  title: string;
  year: string;
}

export default function HallOfFamePage() {
  const [fame, setFame] = useState<FameEntry[]>([
    { id: 1, title: 'Award 1', year: '2023' },
  ]);
  const [form, setForm] = useState<FameEntry | null>(null);

  const handleCreateOrUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form) return;
    if (form.id) {
      setFame(fame.map((f) => (f.id === form.id ? form : f)));
    } else {
      setFame([...fame, { ...form, id: Date.now() }]);
    }
    setForm(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure?')) setFame(fame.filter((f) => f.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-600">Hall of Fame</h1>
        <button
          onClick={() => setForm({ id: 0, title: '', year: '' })}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Add Entry
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fame.map((entry) => (
          <div key={entry.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="h-24 w-24 mx-auto bg-purple-200 rounded-full" />
            <h2 className="mt-4 text-xl font-semibold text-gray-800">{entry.title}</h2>
            <p className="text-gray-600">{entry.year}</p>
            <div className="mt-4 space-x-3">
              <button
                onClick={() => setForm(entry)}
                className="text-purple-600 hover:underline font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(entry.id)}
                className="text-red-600 hover:underline font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {form && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              {form.id ? 'Edit Entry' : 'Add Entry'}
            </h2>
            <form onSubmit={handleCreateOrUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Title</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Year</label>
                <input
                  type="text"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setForm(null)}
                  className="text-gray-600 hover:underline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                >
                  {form.id ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}