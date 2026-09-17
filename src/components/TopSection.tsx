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
    <div className="relative w-full h-[55vh] md:h-[65vh] lg:h-[70vh] overflow-hidden rounded-b-[2.5rem]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Calming brand-toned overlay instead of harsh black */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-900/55 to-brand-950/85" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/30 via-transparent to-calm-500/25" />
      </div>

      {/* Soft floating shapes */}
      <div className="absolute -top-10 left-10 w-56 h-56 bg-calm-400/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-brand-400/30 rounded-full blur-3xl animate-float" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-2xl text-white/90 drop-shadow-md">
          {description}
        </p>
      </div>
    </div>
  );
}
