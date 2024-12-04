import React, { useContext, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import classes from './Payment.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProdutCard from '../../components/Product/ProductCard'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/CurrencyFormat/CurrenceyFormat'
// import { colors } from '@mui/material'

function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount
  }, 0)

  const [cardError, setCardError] = useState("")
  const stripe = useStripe();
  const elements = useElements();

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount
  }, 0)

  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError('');
  };

  return (
    <LayOut>
      <div className={classes.payment_header}>
        {/* header */}
        Checkout ({totalItem}) items
      </div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex} >
          <h3>Delivery Adddress</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IT</div>
          </div>

        </div>
        <hr />

        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {
              basket?.map((item) => <ProdutCard product={item} flex={true} />)
            }
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment method</h3>
          <div className={classes.Payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                {
                  cardError && <small style={{ color: 'red' }}>{cardError}</small>
                }
                <CardElement onChange={handleChange} />
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}> <p>Total Order | </p> <CurrencyFormat amount={total} /> </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>



    </LayOut >
  )
}

export default Payment
