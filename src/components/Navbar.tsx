import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, User, Search } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { useSearch } from '../hooks/useSearch';
import { blogs } from '../data/blogs';
import SearchOverlay from './SearchOverlay';

export default function Navbar() {
  const scrollDirection = useScrollDirection();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { searchTerm, setSearchTerm, filteredBlogs } = useSearch(blogs);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 backdrop-blur-md bg-white/70 transition-all duration-300 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <BookOpen className="h-8 w-8 text-pink-600 transform transition-transform group-hover:scale-110" />
                <span className="font-bold text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  BlogVerse
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-8">
              {[
                { to: '/', icon: Home, label: 'Home' },
                { to: '/blogs', icon: BookOpen, label: 'Blogs' },
                { to: '/about', icon: User, label: 'About' },
              ].map(({ to, icon: Icon, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-200">
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Search className="h-5 w-5" />
                <span className="font-medium">Search</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        results={filteredBlogs}
      />
    </>
  );
}
