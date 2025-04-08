'use client';

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { getPartners } from "./action";
import { motion } from "framer-motion";

interface Partner {
  id: number;
  name: string | null;
  image: string | null;
}

export default function PartnersSection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchPartners() {
      try {
        const data = await getPartners();
        const formattedPartners = data.map((partner) => ({
          id: partner.id,
          name: partner.name ?? 'Unknown Partner',
          image: partner.image ?? '/default-partner-image.png',
        }));
        setPartners(formattedPartners);
      } catch (error) {
        console.error("Error fetching partners:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPartners();
  }, []);

  useEffect(() => {
    if (!partners.length || loading) return;

    const marquee = marqueeRef.current;
    if (!marquee) return;

    const animation = marquee.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-50%)' }
      ],
      {
        duration: 20000, // Faster scroll for modern feel
        iterations: Infinity,
        easing: 'linear',
      }
    );

    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.play();

    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      animation.cancel();
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [partners, loading]);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Simplified background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Partners
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Working with top organizations to drive mental health innovation
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
          </div>
        ) : partners.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No partners available yet.
          </div>
        ) : (
          <div className="relative overflow-hidden py-8">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900 to-transparent z-10" />

            <div ref={marqueeRef} className="flex whitespace-nowrap">
              {/* First set */}
              <div className="flex gap-6 min-w-full">
                {partners.map((partner) => (
                  <Card
                    key={partner.id}
                    className="group flex-none w-64 h-36 flex items-center justify-center p-6
                      bg-gray-800/80 border border-gray-700/50 rounded-lg
                      hover:bg-gray-700/90 hover:border-indigo-500/50
                      transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
                  >
                    <div className="relative w-full h-full">
                      {partner.image && partner.image !== '/default-partner-image.png' ? (
                        <Image
                          src={partner.image}
                          alt={`${partner.name} logo`}
                          fill
                          sizes="(max-width: 768px) 100vw, 256px"
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-indigo-300 font-medium">
                          {partner.name}
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-6 min-w-full">
                {partners.map((partner) => (
                  <Card
                    key={`${partner.id}-duplicate`}
                    className="group flex-none w-64 h-36 flex items-center justify-center p-6
                      bg-gray-800/80 border border-gray-700/50 rounded-lg
                      hover:bg-gray-700/90 hover:border-indigo-500/50
                      transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
                  >
                    <div className="relative w-full h-full">
                      {partner.image && partner.image !== '/default-partner-image.png' ? (
                        <Image
                          src={partner.image}
                          alt={`${partner.name} logo`}
                          fill
                          sizes="(max-width: 768px) 100vw, 256px"
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-indigo-300 font-medium">
                          {partner.name}
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}