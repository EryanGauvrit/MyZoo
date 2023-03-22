import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Error from './components/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './Footer';
import Mentions from './pages/Mentions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='site'>
        <Header />
        <Routes>
          <Route exact path="/"
            element={<Home />}
          />
          <Route exact path="/contact"
            element={<Contact />}
          />
          <Route exact path="/mentions"
            element={<Mentions />}
          />
          <Route exact path="*"
            element={<Error />}
          />
        </Routes>
        <div className='minSite'></div>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


