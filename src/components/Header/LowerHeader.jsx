import React from 'react'
import classes from './header.module.css'
import MenuIcon from '@mui/icons-material/MenuOutlined';

const LowerHeader = () => {
  return (
    <div className={classes.lower_container}>
      <ul className={classes.all}>
        <MenuIcon />
        <li><p>All</p></li>
      </ul>
      <ul className={classes.all_list}>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  )
}

export default LowerHeader
