"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: "How can I get started with MindoraHealth's mental health platform?",
    answer: "Getting started is easy! Simply create an account on our platform, complete a brief assessment, and you'll be matched with the appropriate resources and support options tailored to your needs.",
    category: "Getting Started",
  },
  {
    question: "What type of mental health support does MindoraHealth provide?",
    answer: "We offer a range of AI-powered support services including mood tracking, guided meditation, cognitive behavioral therapy exercises, and connection to licensed mental health professionals when needed.",
    category: "Services",
  },
  {
    question: "Is my information kept confidential?",
    answer: "Yes, absolutely. We take privacy very seriously and adhere to strict data protection standards. All your information is encrypted and stored securely, and we never share your personal data without your explicit consent.",
    category: "Privacy",
  },
  {
    question: "Can I access MindoraHealth's services from my mobile device?",
    answer: "Yes, our platform is fully accessible via web browsers on all devices, and we also offer dedicated mobile apps for both iOS and Android devices.",
    category: "Accessibility",
  },
  {
    question: "What are your operating hours for support?",
    answer: "Our AI-powered platform is available 24/7. For human support, our team is available Monday through Friday, 9:00 AM to 6:00 PM EAT. Emergency support is available 24/7 through our crisis hotline.",
    category: "Support",
  },
];

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Find quick answers to common questions about our MindoraHealth services and platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="bg-card border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left p-8 flex justify-between items-center hover:bg-muted/50 transition-colors duration-200 rounded-2xl"
              >
                <span className="font-semibold text-lg text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-primary transition-transform duration-300 ${
                    openFAQ === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="px-8 pb-8">
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    {faq.category}
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
