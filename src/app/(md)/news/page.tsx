import React from 'react';
import TopSection from "@/components/TopSection";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function News() {
  const articles = [
    {
      title: 'Mindora Achieves New Heights in Innovation',
      description: 'Learn how Mindora continues to lead in technological advancements that are reshaping industries.',
      image: '/images/article1.jpg',
      link: '/news/1',
    },
    {
      title: 'The Future of Business: Insights from Experts',
      description: 'Experts discuss how businesses are evolving in the digital age, with tips for growth and adaptation.',
      image: '/images/article2.jpg',
      link: '/news/2',
    },
    {
      title: 'Mindora’s Global Expansion: New Markets Ahead',
      description: 'Mindora expands its reach into international markets, setting new benchmarks for global business.',
      image: '/images/article3.jpg',
      link: '/news/3',
    },
  ];

  return (
    <>
      {/* Top Section - Hero */}
      <TopSection
        backgroundImage="/images/newsbg.jpg"
        title="News and Articles About Mindora"
        description="Explore the cutting-edge solutions we offer to empower your business."
      />

      {/* Articles Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-extrabold text-center text-foreground mb-12">
          Latest News & Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
              <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground dark:text-black">{article.title}</h3>
                <p className="text-muted-foreground dark:text-gray-400">{article.description}</p>
                <a
                  href={article.link}
                  className="text-[#9333EA] hover:bg-[#9333EA]/90 text-base w-full mt-4 inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Read More <ArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination or Load More Button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-[#9333EA] text-white hover:bg-[#9333EA]/90">
            Load More Articles
          </Button>
        </div>
      </div>
    </>
  );
}
