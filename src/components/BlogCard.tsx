import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 max-w-sm md:max-w-md mx-auto flex flex-col h-full">
      {/* Image container */}
      <div className="relative aspect-video">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="p-4 flex flex-col h-full">
        {/* Category and Read Time */}
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block px-2 py-0.5 bg-pink-100 text-pink-600 rounded-full text-xs">
            {blog.category}
          </span>
          <div className="flex items-center text-gray-500 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            {blog.readTime}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-sm font-semibold mb-1 text-gray-900 line-clamp-2">
          {blog.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-xs line-clamp-2 mb-3">{blog.excerpt}</p>

        {/* Author Info and Read More */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-gray-100 pt-2 mt-auto space-y-2 md:space-y-0">
          {/* Author Info */}
          <div className="flex items-center space-x-2 min-w-0">
            <div className="relative w-8 h-8 flex-shrink-0">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-gray-900 text-xs truncate">{blog.author.name}</p>
              <p className="text-gray-500 text-xs">{blog.date}</p>
            </div>
          </div>

          {/* Read More Link */}
          <Link
            to={`/blog/${blog.id}`}
            className="py-1.5 px-4 bg-pink-50 text-pink-600 text-xs font-medium rounded-lg shadow-sm hover:bg-pink-100 hover:text-pink-700 transition-colors duration-200">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
