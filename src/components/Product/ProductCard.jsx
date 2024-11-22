import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrenceyFormat';
import classes from './Product.module.css'

const ProductCard = ({ product }) => {
  const { image, title, id, rating, price } = product
  return (
    <div className={classes.card_container}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div className={classes.title}>
        <h3>{title.length > 40 ? title.slice(0, 40) + "..." : title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/*count */}
          <small >{rating.count}</small>
        </div>
        <div className={classes.price}>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

      </div>
      <button className={classes.button}> Add to cart</button>
    </div>
  )
}

export default ProductCard;
