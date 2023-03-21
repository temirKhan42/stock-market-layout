import { useDispatch } from 'react-redux';
import { fetchStocks } from '../store/slices/stockSlice.js';
import Navbar from '../modules/Navbar/Navbar';
import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';
import { Table } from '../modules/table';
import React from 'react';

function Stocks() {
  const dispatch = useDispatch();
  dispatch(fetchStocks());

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default Stocks;
