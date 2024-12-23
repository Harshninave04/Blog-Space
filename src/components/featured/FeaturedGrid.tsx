import React from 'react';
import FeaturedPost from './FeaturedPost';
import { BlogPost } from '../../types';

interface FeaturedGridProps {
  posts: BlogPost[];
}

export default function FeaturedGrid({ posts }: FeaturedGridProps) {
  const [mainPost, ...otherPosts] = posts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2">
        <FeaturedPost post={mainPost} />
      </div>
      {otherPosts.slice(0, 2).map((post) => (
        <FeaturedPost key={post.id} post={post} />
      ))}
    </div>
  );
}