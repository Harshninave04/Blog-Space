import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogs';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id);

  // Effect to scroll to top when component mounts or blog ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]); // Dependency on id ensures scroll reset when switching between blog posts

  if (!blog) {
    return (
      <div className="min-h-screen bg-violet-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h2>
          <Link to="/blogs" className="text-pink-600 hover:text-pink-700 font-medium">
            Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-violet-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-pink-600 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
        />

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-gray-900">{blog.author.name}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {blog.readTime} · {blog.date}
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

          {/* Use ReactMarkdown for parsing and rendering markdown content */}
          <ReactMarkdown className="prose max-w-none text-gray-600">{blog.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
