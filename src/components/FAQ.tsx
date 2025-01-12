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
    question: "How can I get started with Mindora's mental health platform?",
    answer: "Getting started is easy! Simply create an account on our platform, complete a brief assessment, and you'll be matched with the appropriate resources and support options tailored to your needs.",
    category: "Getting Started",
  },
  {
    question: "What type of mental health support does Mindora provide?",
    answer: "We offer a range of AI-powered support services including mood tracking, guided meditation, cognitive behavioral therapy exercises, and connection to licensed mental health professionals when needed.",
    category: "Services",
  },
  {
    question: "Is my information kept confidential?",
    answer: "Yes, absolutely. We take privacy very seriously and adhere to strict data protection standards. All your information is encrypted and stored securely, and we never share your personal data without your explicit consent.",
    category: "Privacy",
  },
  {
    question: "Can I access Mindora's services from my mobile device?",
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find quick answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openFAQ === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                    {faq.category}
                  </div>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
