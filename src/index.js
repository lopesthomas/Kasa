import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Home from './pages/Home';
import Location from './pages/Location';
import Error from './components/Error';
import Footer from './components/Footer';
import Propos from './pages/Propos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />   
    <Router>
      <div className='container'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/location/:idLink" element={<Location />} />
        <Route path="/apropos" element={<Propos />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      </div>
      <Footer />
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
