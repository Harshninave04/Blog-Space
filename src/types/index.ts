export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}