import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './productCard';
import classes from './product.module.css'


const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])





  return (
    <section className={classes.products_container}>
      {
        products.map((singleProducts, index) => (
          <ProductCard product={singleProducts} key={index} />
        ))
      }
    </section>
  )
}

export default Product;
