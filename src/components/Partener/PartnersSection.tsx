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
        duration: 25000, // Slower for better readability
        iterations: Infinity,
        easing: 'linear',
      }
    );

    const handleMouseEnter = () => {
      animation.pause();
    };
    const handleMouseLeave = () => {
      animation.play();
    };

    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      animation.cancel();
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [partners, loading]);

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>Trusted Partnerships</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            Trusted by Leading{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Organizations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Collaborating with world-class organizations to revolutionize mental health support and create meaningful impact across communities.
          </p>
        </motion.div>

        {loading && (
          <div className="flex justify-center py-20">
            <div className="flex items-center gap-3">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <span className="text-muted-foreground font-medium">Loading our trusted partners...</span>
            </div>
          </div>
        )}

        {!loading && partners.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Loader2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Building Partnerships</h3>
              <p className="text-muted-foreground">We're actively building relationships with leading organizations.</p>
            </div>
          </div>
        )}

        {!loading && partners.length > 0 && (
          <div className="relative overflow-hidden py-12">
            {/* Enhanced Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

            <div ref={marqueeRef} className="flex whitespace-nowrap">
              {/* First set */}
              <div className="flex gap-8 min-w-full">
                {partners.map((partner) => (
                  <Card
                    key={partner.id}
                    className="group flex-none w-80 h-48 flex items-center justify-center p-8
                      bg-card border-0 shadow-lg hover:shadow-2xl rounded-2xl
                      hover:bg-card/80 transition-all duration-500 hover:-translate-y-2
                      backdrop-blur-sm relative overflow-hidden"
                  >
                    {/* Card Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

                    <div className="relative w-full h-full z-10">
                      {partner.image && partner.image !== '/default-partner-image.png' ? (
                        <Image
                          src={partner.image}
                          alt={`${partner.name} logo`}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="object-contain transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                              <span className="text-2xl font-bold text-primary">{partner.name?.charAt(0)}</span>
                            </div>
                            <span className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                              {partner.name}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-8 min-w-full">
                {partners.map((partner) => (
                  <Card
                    key={`${partner.id}-duplicate`}
                    className="group flex-none w-80 h-48 flex items-center justify-center p-8
                      bg-card border-0 shadow-lg hover:shadow-2xl rounded-2xl
                      hover:bg-card/80 transition-all duration-500 hover:-translate-y-2
                      backdrop-blur-sm relative overflow-hidden"
                  >
                    {/* Card Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

                    <div className="relative w-full h-full z-10">
                      {partner.image && partner.image !== '/default-partner-image.png' ? (
                        <Image
                          src={partner.image}
                          alt={`${partner.name} logo`}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="object-contain transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                              <span className="text-2xl font-bold text-primary">{partner.name?.charAt(0)}</span>
                            </div>
                            <span className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                              {partner.name}
                            </span>
                          </div>
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