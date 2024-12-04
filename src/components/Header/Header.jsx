import React from 'react'
import classes from './header.module.css'
import LocationIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import CartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from '../../Utillty/firebase'
import { RiArrowDropDownFill } from "react-icons/ri";




const header = () => {

  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount
  }, 0)

  return (
    <section className={classes.fixed}>
      <section>
        <section>
          <div className={classes.header_container}>
            <div className={classes.logo_container}>
              {/* logo */}

              <Link to="/" > <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="amazon-logo" className={classes.logo_container_img} />
              </Link>
              {/* delivery */}
              <div className={classes.deliver_container}>
                <span>
                  <LocationIcon />
                </span>
                <div className={classes.deliver}>
                  <p>Deliver to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" id='' name='' placeholder='search product' />
              < SearchIcon className={classes.searchIcon} />
            </div>
            <div className={classes.order_container}>
              <div className={classes.order}>
                <div className={classes.flag_en}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-uQqytkTa4eQidSKSfsVHMMUOH755DRGYlWpukp_aD0bFKOJIC3zx6vPW9mynUGSo3o&usqp=CAU" alt="" className={classes.language} />
                  <section className={classes.en_icon}>
                    <option value="" className={classes.en}>EN</option>
                    <RiArrowDropDownFill size={20} />
                  </section>
                </div>
                <Link to={!user && "/auth"} className={classes.acount}>
                  <div className={classes.sign_acount}>
                    <div>
                      {
                        user ? (
                          <>

                            <p>Hello {user?.email?.split("@")[0]}</p>
                            <span onClick={() => auth.signOut()}>Sign Out</span>

                          </>
                        ) : (
                          <div >
                            <p>Hello sign in</p>
                            <div className={classes.hello_icon}>
                              <span>Acount & lists  </span>
                              <RiArrowDropDownFill size={20} className={classes.acount_icon} />
                            </div>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </Link>
                <Link to="/orders" className={classes.returns_orders}>
                  <p>returns</p>
                  <span>& orders</span>
                </Link>
                <Link to='/cart' className={classes.cart}>
                  {<CartOutlinedIcon size={35} />}
                  <p>Cart</p>

                  <span>{totalItem}</span>
                </Link>

              </div>
            </div>
          </div>

        </section>
      </section >
      <LowerHeader />
    </section>

  )

}

export default header;
