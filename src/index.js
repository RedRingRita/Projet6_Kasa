import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Housing from './Housing/Housing';
import Error from './Error/Error';
import About from './About/About';
import AccueilKasa from './HomePage/AccueilKasa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<AccueilKasa/>}/>
        <Route path='/housing' element={<Housing />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);