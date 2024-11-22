import React from 'react'
import classes from './header.module.css'
import LocationIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import CartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';







const header = () => {
  return (
    <>
      <section>
        <section>
          <div className={classes.header_container}>
            <div className={classes.logo_container}>
              {/* logo */}
              <Link to="/" > <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="amazon-logo" className={classes.logo_container_img} />
              </Link>
              {/* delivery */}
              <span>
                <LocationIcon />
              </span>
              <div className={classes.deliver}>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" id='' name='' placeholder='search product' />
              < SearchIcon />
            </div>
            <div className={classes.order_container}>
              <div className={classes.order}>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-uQqytkTa4eQidSKSfsVHMMUOH755DRGYlWpukp_aD0bFKOJIC3zx6vPW9mynUGSo3o&usqp=CAU" alt="" className={classes.language} />
                <section>
                  <option value="" className={classes.en}>EN</option>
                </section>

                <Link to="/auth" className={classes.acount}>
                  <div className={classes.sign_acount}>
                    <p>sign in</p>
                    <span>Acount & lists</span>
                  </div>
                </Link>
                <Link to="/orders" className={classes.returns_orders}>
                  <p>returns</p>
                  <span>& orders</span>
                </Link>
                <Link to='/cart' className={classes.cart}>
                  {<CartOutlinedIcon size={35} />}
                  <span>0</span>
                </Link>

              </div>
            </div>
          </div>

        </section>
      </section >
      <LowerHeader />
    </>

  )

}

export default header;
