import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar_Content from './components/Navbar_Content';
import Footer_Content from './components/Footer_Content';
import ProductShow from './components/ProductShow';
import ProductDetail from './components/ProductDetail';
import ProductAdd from './components/ProductAdd';
import ProductUpdate from './components/ProductUpdate';


function App() {
  return (
    <BrowserRouter>
      <Navbar_Content />
      <Routes>
        <Route exact path='/' element={<ProductShow />} /> 
        <Route exact path='/add' element={<ProductAdd />} />
        <Route exact path='/:id/' element={<ProductDetail />} />
        <Route exact path='/:id/update' element={<ProductUpdate />} />
      </Routes>
      <Footer_Content />
    </BrowserRouter>
  );
}

export default App;
