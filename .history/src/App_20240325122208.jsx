import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Componnts/SignIn';
import SignUp from './Componnts/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the home page */}
        <Route path="/signin" element={<SignIn />} />
        
        {/* Define the route for the about page */}
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </Router>
  );
}

export default App;

