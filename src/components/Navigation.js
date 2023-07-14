import React from "react";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../CartContext";

function Navigation(){
    const cartStyle={
        background: '#F59E0D',
        display:'flex',
        padding:'6px 12px',
        borderRadius: '50px'
    }

    const{ cart } = useContext(CartContext);

    return(
        <div>
            <nav className="container mx-auto flex items-center justify-between py-4">
                    <Link to="/">
                        <img style={{height:45}} src="/images/logo.png" alt="logo"/>
                    </Link>
                    <ul className="flex items-center">
                        <li className = "inline"><Link to="/">Home</Link></li>
                        <li className = "ml-6 inline"><Link to="/products">Products</Link></li>
                        <li className = "ml-6 inline">
                           <Link to="/cart">
                                <div style={cartStyle}>
                                    <span>{cart.totalItems ? cart.totalItems : 0}</span>
                                    <img className = "ml-2" src="/images/cart.png" alt="cart-icon"/>
                                </div>
                           </Link>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default Navigation;