import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import SignInAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup.component';



const HatsPage = () => {
  return ( 
    <div>
      <h1>HATS</h1>
    </div>
   );
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentuser: null }
  }
  unsubscribeFromAuth = null;

componentDidMount(){
 this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentuser :user});
    console.log(user)
  })

}
 componentWillUnmount(){
  this.unsubscribeFromAuth();
 }

  
  render() { 
    return ( 
      <div>
        <Header currentUser = {this.state.currentuser}/>
        <Routes>
          <Route path='/' element ={<HomePage/>}/>
          <Route path='/shop/hats' element= {<HatsPage/>}/>
          <Route path='/shop' element= {<ShopPage/>}/>
          <Route path='/signin' element= {<SignInAndSignUpPage/>}/>
        </Routes>
      </div>
     );
  }
}
 

export default App;
