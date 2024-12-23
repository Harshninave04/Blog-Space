import React from 'react';
import FeaturedGrid from './FeaturedGrid';
import { blogs } from '../../data/blogs';

export default function FeaturedSection() {
  const featuredPosts = blogs.slice(0, 3);

  return (
    <section className="bg-violet-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Stories</h2>
          <p className="text-gray-600 mt-2">Discover our most impactful articles</p>
        </div>
        <FeaturedGrid posts={featuredPosts} />
      </div>
    </section>
  );
}