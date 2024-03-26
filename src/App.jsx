import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './Componnts/SignIn';
import SignUp from './Componnts/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Redirects any other path to /signin */}
        <Route path="*" element={<Navigate replace to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
