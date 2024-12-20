import React from "react";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory">
      {/* Section 1 */}
      <section className="h-screen flex items-center justify-center bg-purple-500 text-white snap-start">
        <h1 className="text-4xl font-bold">Welcome to Section 1</h1>
      </section>

      {/* Section 2 */}
      <section className="h-screen flex items-center justify-center bg-gray-800 text-white snap-start">
        <h1 className="text-4xl font-bold">Explore Section 2</h1>
      </section>

      {/* Section 3 */}
      <section className="h-screen flex items-center justify-center bg-green-500 text-white snap-start">
        <h1 className="text-4xl font-bold">Discover Section 3</h1>
      </section>
    </div>
  );
}
