import Link from "next/link";

export default function NotFound() {

  return (
    <div className="relative flex flex-col items-center justify-center h-screen transition-all bg-gradient-to-br from-primary via-primary/80 to-primary/60 text-primary-foreground">
      <h1 className="text-9xl font-bold tracking-widest drop-shadow-lg transition-all text-primary-foreground">
        404
      </h1>
      <p className="text-xl md:text-xl mt-4 mb-8 text-center">
        The page you&apos;re looking for doesn&apos;t exist. <br />
        Maybe it got lost in the void!
      </p>

      <Link href="/" className="px-6 py-3 font-semibold text-lg rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 bg-background text-foreground hover:bg-secondary">
          Go Back Home
      </Link>

      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[150px] transition-all duration-500 bg-primary-foreground/10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[150px] transition-all duration-500 bg-primary-foreground/5"></div>
      </div>

      <div className="absolute top-10 right-10 animate-float">
        <svg
          className="w-16 h-16 text-primary-foreground/30"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h11M9 21V3m0 18l-6-6m6 6l6-6"
          />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 animate-float delay-200">
        <svg
          className="w-12 h-12 text-primary-foreground/20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>
  );
}
