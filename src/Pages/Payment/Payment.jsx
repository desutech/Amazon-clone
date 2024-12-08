import React, { useContext, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import classes from './Payment.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProdutCard from '../../components/Product/ProductCard'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/CurrencyFormat/CurrenceyFormat'
import { axiosInstance } from '../../Api/axios'
import { ClipLoader } from 'react-spinners'
import { db } from '../../Utillty/firebase'
import { useNavigate } from 'react-router-dom'
import { Type } from '../../Utillty/acthion.type'

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount
  }, 0)

  const [cardError, setCardError] = useState("")
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [prossening, setProssening] = useState(false)

  const handleChange = (e) => {
    // console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError('');
  };


  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setProssening(true);
      const response = await axiosInstance({
        method: "post",
        url: `/payment/create?total=${total * 100}`,
      });

      const clientSecret = response.data?.clientSecret;
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

      dispatch({ type: Type.EMPITY_BASKET });

      setProssening(false);
      navigate('/orders', { state: { msg: "you have placed new Orders" } })
    } catch (error) {
      console.error(error);
      setProssening(false);
    }
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
              <form onSubmit={handlePayment}>
                {
                  cardError && <small style={{ color: 'red' }}>{cardError}</small>
                }
                <CardElement onChange={handleChange} />
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}> <p>Total Order | </p> <CurrencyFormat amount={total} /> </span>
                  </div>
                  <button type='submit'>

                    {
                      prossening ? (
                        <div className={classes.lodding}>
                          <ClipLoader color="#000" size={15} />
                          <p>Please Wait </p>
                        </div>
                      ) : "Pay Now"
                    }

                  </button>
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