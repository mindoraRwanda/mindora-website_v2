import React from 'react';
import TopSection from "@/components/TopSection";
import { Button } from '@/components/ui/button';
import { ArrowRight, Newspaper, TrendingUp, Calendar, BookOpen, Filter, Search } from 'lucide-react';

interface Article {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  date: string;
  readTime: string;
}

export default function News() {
  const articles: Article[] = [
    {
      title: 'Mindora Achieves New Heights in Mental Health Innovation',
      description: 'Discover how our AI-powered solutions are transforming mental health support across Africa, reaching new milestones in accessibility and effectiveness.',
      image: '/images/article1.jpg',
      link: '/news/1',
      category: 'Innovation',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'The Future of Mental Health Support: Insights from Experts',
      description: 'Leading mental health professionals discuss how AI and technology are revolutionizing therapeutic approaches and improving outcomes.',
      image: '/images/article2.jpg',
      link: '/news/2',
      category: 'Industry Insights',
      date: 'March 10, 2024',
      readTime: '7 min read'
    },
    {
      title: "Mindora's Impact: Reaching New Communities",
      description: 'How our platform is breaking down barriers to mental health support in underserved regions across the continent.',
      image: '/images/article3.jpg',
      link: '/news/3',
      category: 'Impact',
      date: 'March 5, 2024',
      readTime: '4 min read'
    }
  ];

  const categories = ['All', 'Innovation', 'Industry Insights', 'Impact', 'Company News'];

  return (
    <div className="min-h-screen bg-background">
      <TopSection
        backgroundImage="/images/newsbg.jpg"
        title="Community & Events "
        description="Stay updated with the latest developments in AI-powered mental health support and Mindora's impact across Africa."
      />

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400" />
              <select className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/images/featured-article.jpg"
              alt="Featured Article"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-8 text-white max-w-2xl">
                <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-sm mb-4">
                  Featured
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Transforming Mental Health Support Through AI Innovation
                </h2>
                <p className="text-gray-200 mb-6">
                  An in-depth look at how Mindora is leveraging artificial intelligence to make
                  mental health support more accessible and effective across Africa.
                </p>
                <Button className="bg-white text-purple-600 hover:bg-purple-50">
                  Read Full Article <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                transform transition-all duration-300 hover:-translate-y-2">
                <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-purple-600 dark:text-purple-400 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 
                    text-purple-600 dark:text-purple-400 rounded-full text-sm mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{article.description}</p>
                  <Button variant="outline" className="w-full">
                    Read More <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Newspaper className="w-12 h-12 mx-auto mb-6 opacity-75" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-purple-100 mb-8">
              Subscribe to our newsletter for the latest updates on mental health innovation and impact stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-xl text-gray-900 min-w-[300px]"
              />
              <Button className="bg-white text-purple-600 hover:bg-purple-50">
                Subscribe <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-12 text-center">
        <Button className="bg-purple-600 text-white hover:bg-purple-700">
          Load More Articles <TrendingUp className="ml-2" />
        </Button>
      </section>
    </div>
  );
}