import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 h-full flex flex-col">
      {/* Image container with fixed aspect ratio */}
      <div className="relative aspect-video flex-shrink-0">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Upper content section */}
        <div>
          {/* Category and Read Time */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-2 py-0.5 bg-pink-100 text-pink-600 rounded-full text-xs">
              {blog.category}
            </span>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              {blog.readTime}
            </div>
          </div>

          {/* Title */}
          <h2 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2">
            {blog.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 text-xs line-clamp-2 mb-4">
            {blog.excerpt}
          </p>
        </div>

        {/* Bottom section with author info and button */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between gap-4">
            {/* Author Info */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="relative w-8 h-8 flex-shrink-0">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-gray-900 text-xs truncate">
                  {blog.author.name}
                </p>
                <p className="text-gray-500 text-xs truncate">{blog.date}</p>
              </div>
            </div>

            {/* Read More Icon */}
            <Link
              to={`/blog/${blog.id}`}
              className="inline-flex items-center justify-center p-2 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100 hover:text-pink-700 transition-colors duration-200 flex-shrink-0"
            >
              <ArrowRight className="h-4 w-4 transition-transform duration-200 hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
