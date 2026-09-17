import React from 'react';
import Image from 'next/image';
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
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-muted-foreground" />
              <select className="px-4 py-3 rounded-xl border border-border bg-card shadow-sm focus:outline-none focus:ring-2 focus:ring-ring">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-md h-[500px]">
            <Image
              src="/images/featured-article.jpg"
              alt="Featured Article"
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-8 text-white max-w-2xl">
                <span className="inline-block px-3 py-1 bg-brand-600 rounded-full text-sm mb-4">
                  Featured
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Transforming Mental Health Support Through AI Innovation
                </h2>
                <p className="text-stone-200 mb-6">
                  An in-depth look at how Mindora is leveraging artificial intelligence to make
                  mental health support more accessible and effective across Africa.
                </p>
                <Button className="bg-white text-brand-600 hover:bg-brand-50 rounded-xl shadow-sm">
                  Read Full Article <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-card rounded-2xl shadow-sm border border-border/50 overflow-hidden
                transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="relative w-full h-56">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-brand-600 dark:text-brand-400 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </span>
                    <span className="text-sm text-calm-600 dark:text-calm-400 flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-900
                    text-brand-600 dark:text-brand-400 rounded-full text-sm mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.description}</p>
                  <Button variant="outline" className="w-full rounded-xl">
                    Read More <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-calm-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Newspaper className="w-12 h-12 mx-auto mb-6 opacity-75 animate-float-slow" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-brand-100 mb-8">
              Subscribe to our newsletter for the latest updates on mental health innovation and impact stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-xl text-stone-900 min-w-[300px] shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-brand-600 hover:bg-brand-50 rounded-xl shadow-sm">
                Subscribe <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-12 text-center bg-background">
        <Button className="bg-brand-600 text-white hover:bg-brand-700 rounded-xl shadow-sm">
          Load More Articles <TrendingUp className="ml-2" />
        </Button>
      </section>
    </div>
  );
}