// app/dashboard/jobs/page.tsx
'use client';

import { useState } from 'react';

interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([
    { id: 1, title: 'Frontend Developer', type: 'Full-time', location: 'Remote' },
  ]);
  const [form, setForm] = useState<Job | null>(null);

  const handleCreateOrUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form) return;
    if (form.id) {
      setJobs(jobs.map((j) => (j.id === form.id ? form : j)));
    } else {
      setJobs([...jobs, { ...form, id: Date.now() }]);
    }
    setForm(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure?')) setJobs(jobs.filter((j) => j.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-600">Job Management</h1>
        <button
          onClick={() => setForm({ id: 0, title: '', type: '', location: '' })}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Add Job
        </button>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-gray-600">
              {job.type} • {job.location}
            </p>
            <div className="mt-4 space-x-3">
              <button
                onClick={() => setForm(job)}
                className="text-purple-600 hover:underline font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(job.id)}
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
              {form.id ? 'Edit Job' : 'Add Job'}
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
                <label className="block text-gray-700 font-medium">Type</label>
                <input
                  type="text"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Location</label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
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