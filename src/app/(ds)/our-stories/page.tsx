'use client';

import { useState} from 'react';
import { PlusCircle, Edit2, Trash2, X, Save, Calendar } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  content: string;
  createdAt?: string;
  excerpt?: string;
  imageUrl?: string;
}

export default function OurStoriesPage() {
  const [stories, setStories] = useState<Story[]>([
    { 
      id: 1, 
      title: 'The Journey of Innovation', 
      content: 'Our team has been working tirelessly to bring new ideas to life. This journey has taught us valuable lessons about perseverance and creativity.',
      createdAt: 'April 5, 2025',
      excerpt: 'A journey of innovation and discovery.',
      imageUrl: '/api/placeholder/600/400'
    },
  ]);
  const [form, setForm] = useState<Story | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  const filteredStories = stories.filter(story => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    story.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateOrUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form) return;
    
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    const excerpt = form.content.length > 120 ? 
      form.content.substring(0, 120) + '...' : 
      form.content;

    if (form.id) {
      setStories(stories.map((s) => (s.id === form.id ? {...form, excerpt, createdAt: form.createdAt || formattedDate} : s)));
    } else {
      setStories([...stories, { 
        ...form, 
        id: Date.now(), 
        createdAt: formattedDate,
        excerpt
      }]);
    }
    setForm(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setStories(stories.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Our Blog</h1>
          <p className="text-gray-600">Share your stories and insights with the world</p>
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          <button
            onClick={() => setForm({ id: 0, title: '', content: '' })}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition shadow-md hover:shadow-lg"
          >
            <PlusCircle size={18} />
            <span>New Post</span>
          </button>
        </div>
      </div>

      {filteredStories.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-600">No blog posts found</h3>
          <p className="text-gray-500 mt-2">
            {searchTerm ? 'Try a different search term' : 'Create your first blog post to get started'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img 
                  src={story.imageUrl || "/api/placeholder/600/400"} 
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{story.createdAt}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{story.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt || story.content}</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setForm(story)}
                    className="flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors"
                  >
                    <Edit2 size={16} className="mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(story.id)}
                    className="flex items-center text-red-500 hover:text-red-700 font-medium transition-colors"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {form && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                {form.id ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h2>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsPreview(!isPreview)}
                  className="text-gray-600 hover:text-purple-600 px-3 py-1 rounded border hover:border-purple-300 transition-colors"
                >
                  {isPreview ? 'Edit' : 'Preview'}
                </button>
                <button
                  type="button"
                  onClick={() => setForm(null)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            {isPreview ? (
              <div className="p-6 space-y-4">
                <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={form.imageUrl || "/api/placeholder/600/400"} 
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-3xl font-bold text-gray-800">{form.title || 'Untitled Post'}</h1>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>{new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="prose max-w-none">
                  {form.content ? form.content.split('\n').map((paragraph, i) => (
                    <p key={i} className="my-4">{paragraph}</p>
                  )) : (
                    <p className="text-gray-400 italic">No content yet...</p>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleCreateOrUpdate} className="p-6 space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Cover Image URL (Optional)</label>
                  <input
                    type="text"
                    value={form.imageUrl || ''}
                    onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                    placeholder="/api/placeholder/600/400"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Use "/api/placeholder/600/400" for a placeholder image</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter an engaging title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Content</label>
                  <textarea
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows={12}
                    placeholder="Write your blog post content here..."
                    required
                  />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setForm(null)}
                    className="px-5 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90 transition shadow-md"
                  >
                    <Save size={18} />
                    {form.id ? 'Update Post' : 'Publish Post'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}