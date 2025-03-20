import React from 'react';
import Hero from '../components/hero';

export const metadata = {
  title: "Ahmed's Portfolio | Home",
  description: "Welcome to my portfolio. Discover my work, projects, and skills.",
  keywords: ['Ahmed', 'portfolio', 'web developer', 'React', 'frontend'],
  robots: "index, follow",
};

function Homepage() {
  return (
    <div className="w-full min-h-screen">
      <section>
        <Hero />
      </section>
    </div>
  );
}

export default Homepage;
