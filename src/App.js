import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Componets/Header/Header';
import Login from './Componets/Login/Login';
import AppoinmentPages from './Componets/Pages/AppoinmentPages/AppoinmentPages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/appintment' element={<AppoinmentPages></AppoinmentPages>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;