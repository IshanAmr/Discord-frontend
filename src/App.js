import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page route */}
        <Route path='/login' element={<LoginPage />} />
        
        {/* Register page route */}
        <Route path='/register' element={<RegisterPage />} />
        
        {/* Redirect to login page when accessing root path */}
        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>
    </Router>
  );
}

export default App;
