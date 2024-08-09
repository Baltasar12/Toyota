import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

const Models = lazy(() => import('./components/Models'));
const Ficha = lazy(() => import('./components/Ficha'));

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-mont">
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Models />} />
              <Route path="/ficha" element={<Ficha />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
