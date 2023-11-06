import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Curd app/Home';
import Create from './Curd app/Create';
import Update from './Curd app/Update';
import Read from './Curd app/Read';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
