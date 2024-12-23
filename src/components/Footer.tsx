import React from 'react';
import { Heart, Mail, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
  ];
  return (
    <footer className="bg-gradient-to-br from-violet-50 to-pink-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About BlogVerse
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A community of writers and readers sharing stories that matter. Join us in exploring
              diverse perspectives and inspiring ideas.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map(({ name, path }) => (
                <li key={name}>
                  <a
                    href={path}
                    className="text-gray-600 hover:text-pink-600 flex items-center justify-center md:justify-start">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {[Twitter, Instagram, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="transform hover:scale-110 transition-transform duration-200 p-3 rounded-full bg-white shadow-lg hover:shadow-xl">
                  <Icon className="h-6 w-6 text-pink-600" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-pink-100">
          <p className="text-center text-gray-600 flex items-center justify-center group">
            Made with
            <Heart className="h-4 w-4 mx-2 text-pink-600 animate-pulse" />
            by
            <span className="ml-1 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold">
              BlogVerse
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
