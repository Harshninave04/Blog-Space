import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { BlogPost } from '../../types';

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="relative group h-[500px] overflow-hidden rounded-xl">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <span className="inline-block px-4 py-1 bg-pink-600 text-white rounded-full text-sm mb-4">
          {post.category}
        </span>
        <h2 className="text-3xl font-bold text-white mb-3">
          {post.title}
        </h2>
        <p className="text-gray-200 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center space-x-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-white font-medium">{post.author.name}</p>
            <div className="flex items-center text-gray-300 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime} · {post.date}
            </div>
          </div>
        </div>
      </div>
      <Link
        to={`/blog/${post.id}`}
        className="absolute inset-0"
        aria-label={`Read ${post.title}`}
      />
    </div>
  );
}