import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import { Route, Routes } from 'react-router-dom';


const HatsPage = () => {
  return ( 
    <div>
      <h1>HATS</h1>
    </div>
   );
}
 

function App() {
  return (
    <Routes>
      <Route path='/' element ={<HomePage/>}/>
      <Route path='/shop/hats' element= {<HatsPage/>}/>
      <Route path='/shop' element= {<ShopPage/>}/>
    </Routes>


  );
}

export default App;
