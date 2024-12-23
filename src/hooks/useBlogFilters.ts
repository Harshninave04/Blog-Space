import { useState, useMemo } from 'react';
import { BlogPost } from '../types';

export function useBlogFilters(blogs: BlogPost[]) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(blogs.map(blog => blog.category));
    return Array.from(uniqueCategories).sort();
  }, [blogs]);

  const filteredAndSortedBlogs = useMemo(() => {
    let filtered = selectedCategory === 'all'
      ? blogs
      : blogs.filter(blog => blog.category === selectedCategory);

    return filtered.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });
  }, [blogs, selectedCategory, sortBy]);

  const getCategoryCount = (category: string) => {
    if (category === 'all') return blogs.length;
    return blogs.filter(blog => blog.category === category).length;
  };

  return {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    categories,
    filteredAndSortedBlogs,
    getCategoryCount,
  };
}