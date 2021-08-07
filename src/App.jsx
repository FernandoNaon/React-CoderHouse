import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Footer } from './components/Footer';
import { CheckOut } from './components/CheckOut'
import { CartContextComponent } from './context/CartContext';

 
function App() {

  return (
    <CartContextComponent>
    <BrowserRouter >
      <NavBar fixed="top" />
      <Switch>
        <Route path="/" exact >
          <ItemListContainer />
        </Route>
        <Route path="/category/:categoryId" >
          <ItemListContainer />
        </Route>
        <Route path="/item/:itemId" >
          <ItemDetailContainer />
        </Route>
        <Route path="/checkout" >
          <CheckOut />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </CartContextComponent>
  );
}
export default App;


