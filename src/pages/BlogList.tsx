import React, { useEffect, useState } from 'react';
import { ArrowDownWideNarrow, ArrowUpAZ, Filter, X } from 'lucide-react';
import { blogs } from '../data/blogs';
import BlogGrid from '../components/blog/BlogGrid';
import CategoryFilter from '../components/blog/CategoryFilter';
import { useBlogFilters } from '../hooks/useBlogFilters';

export default function BlogList() {
  const {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    categories,
    filteredAndSortedBlogs,
    getCategoryCount,
  } = useBlogFilters(blogs);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Effect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-violet-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {selectedCategory === 'all' ? 'All Posts' : selectedCategory}
          </h1>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700 hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Mobile Overlay */}
          <div
            className={`md:hidden fixed inset-0 bg-gray-800/50 z-50 transition-opacity duration-300 ${
              isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsFilterOpen(false)}>
            <div
              className={`absolute right-0 top-0 h-full w-80 bg-white transform transition-transform duration-300 ${
                isFilterOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={(category) => {
                    setSelectedCategory(category);
                    setIsFilterOpen(false);
                  }}
                  getCategoryCount={getCategoryCount}
                />
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setSortBy('date');
                        setIsFilterOpen(false);
                      }}
                      className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition-colors ${
                        sortBy === 'date'
                          ? 'bg-pink-600 text-white'
                          : 'hover:bg-pink-50 text-gray-700'
                      }`}>
                      <ArrowDownWideNarrow className="h-4 w-4" />
                      <span>Latest First</span>
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('title');
                        setIsFilterOpen(false);
                      }}
                      className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition-colors ${
                        sortBy === 'title'
                          ? 'bg-pink-600 text-white'
                          : 'hover:bg-pink-50 text-gray-700'
                      }`}>
                      <ArrowUpAZ className="h-4 w-4" />
                      <span>Alphabetical</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Desktop */}
          <div className="hidden md:block md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                getCategoryCount={getCategoryCount}
              />

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSortBy('date')}
                    className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition-colors ${
                      sortBy === 'date'
                        ? 'bg-pink-600 text-white'
                        : 'hover:bg-pink-50 text-gray-700'
                    }`}>
                    <ArrowDownWideNarrow className="h-4 w-4" />
                    <span>Latest First</span>
                  </button>
                  <button
                    onClick={() => setSortBy('title')}
                    className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition-colors ${
                      sortBy === 'title'
                        ? 'bg-pink-600 text-white'
                        : 'hover:bg-pink-50 text-gray-700'
                    }`}>
                    <ArrowUpAZ className="h-4 w-4" />
                    <span>Alphabetical</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="hidden md:flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Posts' : selectedCategory}
              </h1>
              <p className="text-gray-600">
                {filteredAndSortedBlogs.length}{' '}
                {filteredAndSortedBlogs.length === 1 ? 'post' : 'posts'}
              </p>
            </div>
            <BlogGrid blogs={filteredAndSortedBlogs} />
          </div>
        </div>
      </div>
    </div>
  );
}