import React, {useState, useEffect } from 'react'
import Product from './Product'
// import {CartContext} from '../CartContext';

const Products = () => {
  // const {name} = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:5000/api/products')
    .then((response) => response.json())
    .then(products =>{
      setProducts(products);
      console.log(products);
    });
  }, []);

  return (
    <div className='container mx-auto pb-24'>
      <h1 className='text-lg font-bold my-8'>Products </h1>
      <div className='grid grid-cols-5 my-8 gap-24'>

      {
        products.map(product => <Product key={product._id} product = {product}/>)
      }
      </div>
    </div>
  )
}

export default Products;
