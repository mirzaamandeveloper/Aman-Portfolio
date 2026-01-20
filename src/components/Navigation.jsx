import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-semibold text-lg hover:text-blue-400 transition-colors">
          Mohammed Aman Baig
        </Link>
        <div className="flex gap-8 items-center">
          <a 
            href="mailto:mdamaanbaig2484@gmail.com"
            className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
          >
            Email <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}
