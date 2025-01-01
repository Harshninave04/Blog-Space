import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import CanvasCursor from './components/Cursor/CanvasCursor';
// import CharacterCursor from './components/Cursor/CharacterCursor';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <CharacterCursor /> */}
        <CanvasCursor />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;