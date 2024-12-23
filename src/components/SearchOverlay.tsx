import React from 'react';
import { X } from 'lucide-react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  results: BlogPost[];
}

export default function SearchOverlay({ 
  isOpen, 
  onClose, 
  searchTerm, 
  onSearchChange,
  results 
}: SearchOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity">
      <div className="bg-white w-full max-w-2xl mx-auto mt-20 rounded-lg shadow-xl">
        <div className="p-4 border-b flex justify-between items-center">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full p-2 focus:outline-none text-lg"
            autoFocus
          />
          <button onClick={onClose} className="ml-4">
            <X className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {results.map(blog => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              onClick={onClose}
              className="block p-4 hover:bg-gray-50 border-b"
            >
              <h3 className="font-medium text-gray-900">{blog.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{blog.excerpt}</p>
            </Link>
          ))}
          {searchTerm && results.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              No results found for "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}