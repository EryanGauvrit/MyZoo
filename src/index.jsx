import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Error from './components/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/"
          element={<Home />}
        />
        <Route exact path="/contact"
          element={<Contact />}
        />
        <Route exact path="*"
          element={<Error />}
        />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);


