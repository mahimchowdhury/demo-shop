import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';



const HatsPage = () => {
  return ( 
    <div>
      <h1>HATS</h1>
    </div>
   );
}
 

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/shop/hats' element= {<HatsPage/>}/>
        <Route path='/shop' element= {<ShopPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
