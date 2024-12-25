import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoreFront from "./Components/StoreFront";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StoreFront />} />
          <Route path="/new" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
