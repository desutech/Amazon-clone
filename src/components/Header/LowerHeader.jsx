import React from 'react'
import classes from './header.module.css'
import MenuIcon from '@mui/icons-material/MenuOutlined';

const LowerHeader = () => {
  return (
    <div className={classes.lower_container}>
      <ul>
        <MenuIcon />
        <li><p>All</p></li>
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
