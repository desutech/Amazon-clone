import React, { useContext } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContecxt } from '../../components/DataProvider/DataProvider'
import ProductCart from '../../components/Product/ProductCard'
import CurrencyFormat from '../../components/CurrencyFormat/CurrenceyFormat'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Type } from '../../Utillty/acthion.type'
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContecxt)
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount
  }, 0)
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item
    })
  }
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    })
  }

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.card_cantainer}>
          <h2>Hello, {user?.name || "Guest"}</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {
            basket?.length === 0 ? (
              <p>Oops! No items in your cart</p>
            ) : (
              basket?.map((item, i) => {
                return <section className={classes.card_product}>
                  <ProductCart
                    product={item}
                    key={item.id}
                    renderDesc={true}
                    flex={true}
                    renderAdd={false}
                  />
                  <div className={classes.btn_container}>
                    <button className={classes.btn} onClick={() => increment(item)}>
                      <ArrowUpIcon />
                    </button>
                    <span>{item.amount}</span>
                    <button className={classes.btn} onClick={() => decrement(item.id)}>
                      <ArrowDownIcon />
                    </button>
                  </div>
                </section>
              })
            )
          }
        </div>
        {
          basket?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items)</p>
                <CurrencyFormat amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This orders container a gift</small>
              </span>
              <Link to="/payment">Continue to checkout</Link>

            </div>
          )
        }
      </section>
    </LayOut>


  )
}

export default Cart
