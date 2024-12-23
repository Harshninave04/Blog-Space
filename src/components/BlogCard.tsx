import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto flex flex-col h-full">
      {/* Image container */}
      <div className="relative aspect-video">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content container with flex layout */}
      <div className="p-4 md:p-6 flex flex-col h-full">
        {/* Main content section that can grow/shrink */}
        <div className="flex-grow">
          {/* Category and Read Time */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
            <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
              {blog.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {blog.readTime}
            </div>
          </div>

          {/* Title */}
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
            {blog.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm md:text-base line-clamp-3">{blog.excerpt}</p>
        </div>

        {/* Bottom section with author info and read more - fixed at bottom */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          {/* Author info */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative w-10 h-10 flex-shrink-0">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="rounded-full object-cover absolute inset-0 w-full h-full"
              />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-gray-900 truncate">{blog.author.name}</p>
              <p className="text-gray-500 text-sm">{blog.date}</p>
            </div>
          </div>

          {/* Read More Link */}
          <Link
            to={`/blog/${blog.id}`}
            className="w-full flex items-center justify-center py-2 px-4 bg-pink-50 text-pink-600 hover:text-pink-700 hover:bg-pink-100 rounded-lg transition-colors duration-200">
            <span className="font-medium">Read More</span>
            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
