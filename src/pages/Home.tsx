import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Sparkles } from 'lucide-react';
import FeaturedSection from '../components/featured/FeaturedSection';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data/blogs';
import CreativeBtn2 from '../components/Button/CreativeBtn2';

export default function Home() {
  const recentBlogs = blogs.slice(3, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-50 via-pink-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-pink-600">BlogVerse</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover stories, thinking, and expertise from writers on any topic.
            </p>
            <Link
              to="/blogs"
              className="inline-flex items-center px-6 py-3"
            >
              {/* Start Reading
              <ArrowRight className="ml-2 h-5 w-5" /> */}
            <CreativeBtn2 arg='Start Reading'/>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <FeaturedSection />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <BookOpen className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
              <p className="text-gray-600">
                Curated articles from expert writers across various topics.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growing Community</h3>
              <p className="text-gray-600">
                Join thousands of readers and writers sharing their perspectives.
              </p>
            </div>
            <div className="text-center p-6">
              <Sparkles className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Daily Updates</h3>
              <p className="text-gray-600">
                Fresh content added daily to keep you inspired and informed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Recent Posts</h2>
            <p className="text-gray-600 mt-2">Stay updated with our latest articles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blogs"
              className="inline-flex items-center px-6 py-3 bg-pink-600 text-white font-medium rounded-full hover:bg-pink-700 transition-colors"
            >
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}