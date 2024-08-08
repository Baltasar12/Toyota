import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Models from './components/Models';
import Ficha from './components/Ficha';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className='font-mont'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Models />} />
          <Route path="/ficha" element={<Ficha />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
