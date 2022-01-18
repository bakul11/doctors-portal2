import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Componets/Header/Header';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;