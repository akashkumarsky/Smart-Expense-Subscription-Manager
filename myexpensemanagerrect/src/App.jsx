import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';

import Navbar from './components/navbar/navebar';
import Subscriptions from './pages/Subscriptions';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="subscriptions" element={<Subscriptions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
