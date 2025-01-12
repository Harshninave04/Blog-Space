import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, User, Search, Menu, X } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { useSearch } from '../hooks/useSearch';
import { blogs } from '../data/blogs';
import SearchOverlay from './SearchOverlay';

export default function Navbar() {
  const scrollDirection = useScrollDirection();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { searchTerm, setSearchTerm, filteredBlogs } = useSearch(blogs);

  const navLinks = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/blogs', icon: BookOpen, label: 'Blogs' },
    { to: '/about', icon: User, label: 'About' },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-40 backdrop-blur-md bg-white/70 transition-all duration-300 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-pink-600 transform transition-transform group-hover:scale-110" />
                <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  BlogVerse
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 mr-2 text-gray-700 hover:bg-pink-50 rounded-lg">
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:bg-pink-50 rounded-lg">
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ to, icon: Icon, label }) => (
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

          {/* Mobile menu dropdown */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(({ to, icon: Icon, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-200">
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
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