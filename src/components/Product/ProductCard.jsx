import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrenceyFormat';
import classes from './Product.module.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utillty/acthion.type';

const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext)


  const addToCard = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description }
    })
  }



  return (
    <div className={`${classes.card_container} ${flex ? classes.product_flexd : ' '}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div className={classes.title}>

        {title ? (
          <h3>{title.length > 40 ? title.slice(0, 40) + "..." : title}</h3>
        ) : <p>no title</p>}

        {/* {<h3>{title}</h3>} */}
        {renderDesc && <div style={{ maxWidth: "700px" }}>{description}
        </div>}

        <div className={classes.rating}>
          {/* rating */}

          {rating?.rate !== undefined && (
            <Rating value={rating.rate} precision={0.1} />
          )}

          {/*count */}
          {rating?.count !== undefined && (
            <small>{rating.count}</small>
          )}
        </div>
        <div className={classes.price}>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {
          renderAdd &&
          <button className={classes.button} onClick={addToCard}> Add to cart</button>
        }

      </div>
    </div >
  )
}

export default ProductCard;
