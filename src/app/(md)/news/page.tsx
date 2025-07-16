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
      title: 'MindoraHealth Achieves New Heights in Mental Health Innovation',
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
      title: "MindoraHealth's Impact: Reaching New Communities",
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
        title="Community & Events"
        description="Stay updated with the latest developments in AI-powered mental health support and MindoraHealth's impact across Africa."
      />

      {/* Search and Filter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-input bg-background text-foreground text-lg shadow-sm focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              />
            </div>
            <div className="flex items-center gap-3">
              <Filter className="text-muted-foreground" />
              <select className="px-4 py-4 rounded-xl border border-input bg-background text-foreground text-lg shadow-sm focus:ring-2 focus:ring-ring focus:border-transparent transition-all">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
            <img
              src="/images/featured-article.jpg"
              alt="Featured Article"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
              <div className="p-8 md:p-12 text-white max-w-3xl">
                <span className="inline-block px-4 py-2 bg-primary rounded-full text-sm font-semibold mb-6">
                  Featured Story
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Transforming Mental Health Support Through AI Innovation
                </h2>
                <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                  An in-depth look at how MindoraHealth is leveraging artificial intelligence to make
                  mental health support more accessible and effective across Africa.
                </p>
                <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Read Full Article <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Latest Updates
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed with our latest insights, innovations, and impact stories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article) => (
              <div key={article.title} className="bg-card border-0 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden
                transform transition-all duration-500 hover:-translate-y-2">
                <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm text-primary flex items-center font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.date}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {article.readTime}
                    </span>
                  </div>
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-foreground leading-tight">{article.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{article.description}</p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl py-3 font-semibold transition-all duration-300">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/5 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-8">
              <Newspaper className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Informed</h2>
            <p className="text-xl mb-12 leading-relaxed">
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