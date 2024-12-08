import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe('pk_test_51QRIYSG1w3aSOlLyQfABS9cRalplXWavUOG344sT5SPQlVCdV2lwEW2VmQc8ahd2Ak2wAjEsXtkMZtqDEaC0uEqL00s1sjly2z');

const Routering = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="auth" element={<Auth />} />
        <Route path="/payment" element={
          <ProtectedRoute msg={"You must log in to pay"} redirect={'/payment'}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        } />


        <Route path="orders" element={

          <ProtectedRoute msg={"You must log in to access your orders"} redirect={'/orders'}>
            <Orders />
          </ProtectedRoute>



        } />
        <Route path="cart" element={<Cart />} />
        <Route path='catagory/:catagoryName' element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router >
  );
};

export default Routering;
