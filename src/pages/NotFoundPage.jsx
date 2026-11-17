import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="bg-[#FBF5EA] min-h-[75vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md bg-white p-8 sm:p-10 rounded-3xl border border-cream-200 shadow-soft">
        <span className="font-serif text-6xl sm:text-7xl font-black text-maroon block mb-2">
          404
        </span>
        <h1 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-3">
          Page Not Found in the Safari
        </h1>
        <p className="text-xs sm:text-sm text-muted mb-6 leading-relaxed">
          The trail you are looking for seems to have wandered off. Return to the main resort grounds to explore all 12 adventures!
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-maroon-dark font-serif font-bold text-xs sm:text-sm shadow-md hover:bg-gold-soft transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Back to Safari Home</span>
        </Link>
      </div>
    </div>
  );
}
