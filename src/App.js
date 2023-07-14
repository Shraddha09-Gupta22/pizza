// import ReactDOM from "react-dom/client";

import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import Navigation from "./components/Navigation";
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';
import { getCart, storeCart } from './pages/helpers';

function App(){
     const [cart, setCart] = useState({});
     useEffect(() => {
          getCart().then(cart =>{
               setCart(JSON.parse(cart));
          });
     }, []);

     useEffect(() => {
          storeCart(JSON.stringify(cart));
     }, [cart]);
    return(
    //code in react to connect the single product page with the product page.
    <Router>
       <CartContext.Provider value = {{cart, setCart }}>
       {/* <a href="/">Home</a>
       <a href="/About">About</a> */}
       <Navigation />
         <Routes>
              <Route path = "/" index element = {<Home />} />
              {/* <Route path = "/about" element = {<About />}/> */}
              <Route exact path = "/products"  element = {<ProductsPage />}/>
              <Route path = "/products/:_id" element = {<SingleProduct />}></Route>
              <Route path = "/cart" element = {<Cart />}/>
         </Routes>
         </CartContext.Provider>
    </Router>   
    )
}
export default App;

{/* // </div> either use <div> or this <> both work as same. */}