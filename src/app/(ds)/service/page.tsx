// app/dashboard/service/page.tsx
'use client';

import { useState } from 'react';

interface Service {
  id: number;
  name: string;
  description: string;
}

export default function ServicePage() {
  const [services, setServices] = useState<Service[]>([
    { id: 1, name: 'Web Development', description: 'Building modern websites.' },
  ]);
  const [form, setForm] = useState<Service | null>(null);

  const handleCreateOrUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form) return;
    if (form.id) {
      setServices(services.map((s) => (s.id === form.id ? form : s)));
    } else {
      setServices([...services, { ...form, id: Date.now() }]);
    }
    setForm(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure?')) setServices(services.filter((s) => s.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-600">Service Management</h1>
        <button
          onClick={() => setForm({ id: 0, name: '', description: '' })}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Add Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
            <div className="mt-4 space-x-3">
              <button
                onClick={() => setForm(service)}
                className="text-purple-600 hover:underline font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(service.id)}
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
              {form.id ? 'Edit Service' : 'Add Service'}
            </h2>
            <form onSubmit={handleCreateOrUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  rows={3}
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