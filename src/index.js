import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Housing from './Pages/Housing/Housing';
import Error from './Pages/Error/Error';
import About from './Pages/About/About';
import AccueilKasa from './Pages/HomePage/AccueilKasa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<AccueilKasa/>}/>
        <Route path='/housing/:houseId' element={<Housing/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/error' element={<Error />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);