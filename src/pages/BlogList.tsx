import React, { useEffect } from 'react';
import { ArrowDownWideNarrow, ArrowUpAZ } from 'lucide-react';
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

  // Effect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-violet-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
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
            <div className="flex justify-between items-center mb-8">
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
