import ReactDOM from "react-dom/client";

import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navigation from "./components/Navigation";

function App(){
    return(
    
    <Router>
       {/* <a href="/">Home</a>
       <a href="/About">About</a> */}
       <Navigation />
         <Routes>
              <Route path = "/" index element = {<Home />} />
              {/* <Route path = "/about" element = {<About />}/> */}
              <Route path = "/products" element = {<Products />}/>
              <Route path = "/cart" element = {<Cart />}/>
         </Routes>
        
    </Router>   
    )
}
export default App;

{/* // </div> either use <div> or this <> both work as same. */}