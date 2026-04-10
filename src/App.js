import React from 'react';
import Home from './pages/Home';
import QuestionComponent from './pages/QuestionComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<QuestionComponent />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;