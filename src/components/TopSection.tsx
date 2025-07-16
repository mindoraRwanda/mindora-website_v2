"use client";



interface TopSectionProps {
  backgroundImage: string;
  title: string;
  description: string;
}

export default function TopSection({
  backgroundImage,
  title,
  description,
}: TopSectionProps) {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Modern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-2xl mb-8 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
