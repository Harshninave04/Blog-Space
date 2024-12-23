import React from 'react';
import BlogCard from '../BlogCard';
import { BlogPost } from '../../types';

interface BlogGridProps {
  blogs: BlogPost[];
}

export default function BlogGrid({ blogs }: BlogGridProps) {
  if (blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No posts found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}