import React from 'react';
import { Heart, Mail, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-violet-50 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About BlogVerse</h3>
            <p className="text-gray-600">
              A community of writers and readers sharing stories that matter.
              Join us in exploring diverse perspectives and inspiring ideas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/blogs" className="text-gray-600 hover:text-pink-600">All Posts</a></li>
              <li><a href="/categories" className="text-gray-600 hover:text-pink-600">Categories</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-pink-600">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-pink-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-pink-600" /> by BlogVerse
          </p>
        </div>
      </div>
    </footer>
  );
}