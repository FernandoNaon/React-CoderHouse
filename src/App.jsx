import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer';
import {CartContextComponent} from './context/CartContext';
import { CartComponent } from './components/Cart'
 
function App() {

  return (
    <CartContextComponent>
    <BrowserRouter >
      <NavBar fixed="top" />
      <Switch>
        <Route path="/" exact >
          <ItemListContainer />
        </Route>
        <Route path="/category/:id" >
          <ItemListContainer />
        </Route>
        <Route path="/item/:id" >
          <ItemDetailContainer />
        </Route>
        <Route path="/cart" >
          <CartComponent />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </CartContextComponent>
  );
}
export default App;


