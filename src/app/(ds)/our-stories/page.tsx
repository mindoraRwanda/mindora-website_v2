// app/dashboard/our-stories/page.tsx
'use client';

import { useState } from 'react';

interface Story {
  id: number;
  title: string;
  content: string;
}

export default function OurStoriesPage() {
  const [stories, setStories] = useState<Story[]>([
    { id: 1, title: 'Story 1', content: 'A journey of innovation.' },
  ]);
  const [form, setForm] = useState<Story | null>(null);

  const handleCreateOrUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form) return;
    if (form.id) {
      setStories(stories.map((s) => (s.id === form.id ? form : s)));
    } else {
      setStories([...stories, { ...form, id: Date.now() }]);
    }
    setForm(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure?')) setStories(stories.filter((s) => s.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-600">Our Stories</h1>
        <button
          onClick={() => setForm({ id: 0, title: '', content: '' })}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Add Story
        </button>
      </div>

      <div className="space-y-4">
        {stories.map((story) => (
          <div key={story.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">{story.title}</h2>
            <p className="text-gray-600">{story.content}</p>
            <div className="mt-4 space-x-3">
              <button
                onClick={() => setForm(story)}
                className="text-purple-600 hover:underline font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(story.id)}
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
              {form.id ? 'Edit Story' : 'Add Story'}
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
                <label className="block text-gray-700 font-medium">Content</label>
                <textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  rows={4}
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