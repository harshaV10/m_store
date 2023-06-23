import React from 'react';
import { Navbar } from '../components/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Product } from './Product';
import { AddProduct } from './AddProduct';
import { EditProduct } from './EditProduct';
import { Demo } from './Demo';

export const Dashboard = () => {
  return (
    <BrowserRouter>
      <div className='relative overflow-x-hidden overflow-y-hidden'>
        <Navbar />
        <div className='ml-20 sm:ml-32 h-screen'>
            <Routes>
              <Route path='/' element={<Demo />} />
              <Route path='/Product' element={<Product />} />
              <Route path='/Add-new-product' element={<AddProduct />} />
              <Route path='/edit-product/:productCode' element={<EditProduct />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
