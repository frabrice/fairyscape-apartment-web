import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FloorPlans from './pages/FloorPlans';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BookNow from './pages/BookNow';
import BookTour from './pages/BookTour';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/floor-plans" element={<FloorPlans />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/book-tour" element={<BookTour />} />
      </Routes>
    </Router>
  );
}

export default App