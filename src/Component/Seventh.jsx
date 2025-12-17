// components/GetStartedSection.jsx
import React from 'react';

const GetStartedSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <div className="max-w-7xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Get started with Freshworks
        </h2>

        {/* 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Card 1: Trial */}
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border border-cyan-500/30 shadow-2xl hover:border-cyan-400/60 transition">
            <span className="inline-block px-4 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold mb-6">
              Trial
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              Free to try. Fast to scale.
            </h3>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Take better customer and employee experience for a spin with a free trial of Freshdesk or Freshservice. No credit card required.
            </p>
            <button className="w-full max-w-xs mx-auto block px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg">
              Try it free
            </button>
          </div>

          {/* Card 2: Contact Sales */}
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/30 shadow-2xl hover:border-purple-400/60 transition">
            <span className="inline-block px-4 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-6">
              Contact Sales
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              See rapid impact in action
            </h3>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Let our product experts show you how Freshworks can solve your specific challenges. Get a personalized walkthrough tailored to your needs.
            </p>
            <button className="w-full max-w-xs mx-auto block px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg">
              Book a demo
            </button>
          </div>

          {/* Card 3: Resources */}
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border border-teal-500/30 shadow-2xl hover:border-teal-400/60 transition">
            <span className="inline-block px-4 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm font-semibold mb-6">
              Resources
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              Learn, explore, get inspired
            </h3>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Explore our library of case studies, product tours, webinars and insights.
            </p>
            <button className="w-full max-w-xs mx-auto block px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg">
              Browse more
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;