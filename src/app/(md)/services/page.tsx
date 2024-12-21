import React from 'react'
import TopSection from "@/components/TopSection"
import { Button } from '@/components/ui/button'
import { 
  Brain, 
  Heart, 
  Shield, 
  Activity, 
  Users, 
  Trophy,
  CheckCircle,
  ArrowRight,
  Stars,
  MessageSquare
} from 'lucide-react'

interface Service {
  title: string
  description: string
  image: string
  link: string
  icon: React.ReactNode
  features: string[]
}

export default function Services() {
  const services: Service[] = [
    {
      title: 'Predictive Mental Health Solutions',
      description: 'Our AI-powered platform analyzes patterns to predict potential mental health challenges, enabling early intervention and preventive care.',
      image: '/images/service1.jpg',
      link: '/services/predictive',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Early warning system for mental health challenges',
        'Personalized risk assessment',
        'AI-driven behavioral pattern analysis',
        'Custom intervention recommendations'
      ]
    },
    {
      title: 'Preventive Therapy Programs',
      description: 'Structured programs designed to build resilience and prevent mental health issues before they develop.',
      image: '/images/service2.jpg',
      link: '/services/preventive',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Cognitive behavioral therapy techniques',
        'Stress management workshops',
        'Mindfulness training',
        'Group support sessions'
      ]
    },
    {
      title: 'Emotional Resilience Tools',
      description: 'Comprehensive toolkit for building emotional strength and maintaining mental wellness in daily life.',
      image: '/images/service3.jpg',
      link: '/services/resilience',
      icon: <Heart className="w-8 h-8" />,
      features: [
        'Interactive mood tracking',
        'Guided meditation exercises',
        'Coping strategy builder',
        'Progress monitoring dashboard'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <TopSection
        backgroundImage="/images/servicbg.jpg"
        title="Our Services"
        description="Explore the cutting-edge solutions we offer to empower your mental health and well-being."
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Mental Health Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our innovative services combine AI technology with proven therapeutic approaches 
              to provide personalized mental health support.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950/30 dark:to-transparent rounded-2xl" />
                
                <div className="relative flex flex-col lg:flex-row items-stretch gap-8 
                  bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden 
                  transform transition-all duration-300 hover:shadow-xl">
                  
                  {/* Image Section */}
                  <div className="lg:w-1/2 relative overflow-hidden min-h-[300px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="p-3 bg-purple-600/90 rounded-full mb-4">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      
                      {/* Features List */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className="bg-purple-600 hover:bg-purple-700 text-white w-full md:w-auto
                        py-6 rounded-xl transform transition-transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Mindora</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of our innovative approach to mental health care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Activity className="w-8 h-8 text-purple-600" />,
                title: "Data-Driven Insights",
                description: "Make informed decisions with AI-powered analytics and personalized recommendations."
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: "Expert Support",
                description: "Access to certified mental health professionals and peer support networks."
              },
              {
                icon: <Trophy className="w-8 h-8 text-purple-600" />,
                title: "Proven Results",
                description: "Join thousands of users who have successfully improved their mental well-being."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 to-purple-800 
            rounded-2xl p-12 text-center text-white shadow-xl">
            <Stars className="w-12 h-12 mx-auto mb-6 opacity-75" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Mental Health Journey?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join thousands of users who have already taken the first step toward better mental well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 py-6 px-8 rounded-xl">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button className="bg-purple-700 text-white hover:bg-purple-800 py-6 px-8 rounded-xl">
                Schedule a Demo
                <MessageSquare className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}