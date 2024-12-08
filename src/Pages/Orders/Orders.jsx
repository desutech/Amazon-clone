import React, { useContext, useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import classes from './Orders.module.css'
import { db } from '../../Utillty/firebase';
import { DataContext } from '../../components/DataProvider/DataProvider';
import Productcard from '../../components/Product/ProductCard'

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([])
  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).collection("orders").orderBy("created", "desc").onSnapshot((Snapshot) => {
        console.log(Snapshot)
        setOrders(
          Snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      });
    } else {
      setOrders([])
    }
  }, [])

  return (
    <LayOut>
      <section className={classes.conrtainer}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>
          {
            orders?.length == 0 && <div style={{ padding: "20px" }}>you don't have orders yet.</div>
          }
          <div>
            {
              orders?.map((eachOrder, i) => {

                return (
                  <div key={i}>
                    <hr />
                    <p>Order Id: {eachOrder?.id}</p>
                    {
                      eachOrder?.data?.basket?.map(order => {
                        return <Productcard
                          flex={true}
                          product={order}
                          key={order.id}
                        />
                      })
                    }
                  </div>
                )


              })
            }
          </div>
        </div>
      </section>
    </LayOut>
  )
}

export default Orders;
