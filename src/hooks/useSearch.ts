import { useState, useMemo } from 'react';
import { BlogPost } from '../types';

export function useSearch(blogs: BlogPost[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [blogs, searchTerm]);

  return { searchTerm, setSearchTerm, filteredBlogs };
}