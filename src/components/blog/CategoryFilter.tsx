import React from 'react';
import { BlogPost } from '../../types';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  getCategoryCount: (category: string) => number;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  getCategoryCount,
}: CategoryFilterProps) {
  return (
    <div className="bg-white rounded-lg">
      <h3 className="text-base font-semibold text-gray-900 mb-2">Categories</h3>
      <div className="space-y-0.5">
        <button
          onClick={() => onSelectCategory('all')}
          className={`w-full text-left px-3 py-2 rounded-md transition-colors flex justify-between items-center ${
            selectedCategory === 'all' ? 'bg-pink-600 text-white' : 'hover:bg-gray-50 text-gray-700'
          }`}>
          <span className="text-sm">All Posts</span>
          <span
            className={`text-xs ${selectedCategory === 'all' ? 'text-pink-100' : 'text-gray-500'}`}>
            {getCategoryCount('all')}
          </span>
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors flex justify-between items-center ${
              selectedCategory === category
                ? 'bg-pink-600 text-white'
                : 'hover:bg-gray-50 text-gray-700'
            }`}>
            <span className="text-sm capitalize">{category}</span>
            <span
              className={`text-xs ${
                selectedCategory === category ? 'text-pink-100' : 'text-gray-500'
              }`}>
              {getCategoryCount(category)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}