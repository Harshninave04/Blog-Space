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
      <nav className={`sticky top-0 z-40 bg-violet-50 shadow-md transition-transform duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-pink-600" />
                <span className="font-bold text-xl text-pink-600">BlogVerse</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-pink-600">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link to="/blogs" className="flex items-center space-x-1 text-gray-700 hover:text-pink-600">
                <BookOpen className="h-5 w-5" />
                <span>Blogs</span>
              </Link>
              <Link to="/about" className="flex items-center space-x-1 text-gray-700 hover:text-pink-600">
                <User className="h-5 w-5" />
                <span>About</span>
              </Link>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-1 text-gray-700 hover:text-pink-600"
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
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