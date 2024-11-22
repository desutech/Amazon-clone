import React from 'react'
import CatagoryCard from './CatagoryCard'
import { catagoryInfo } from './catagoryFullnfos'
import classes from './catagory.module.css'
const Catagory = () => {
  return (
    <section className={classes.Catagory_container}>
      {
        catagoryInfo.map((infos, index) => (
          <CatagoryCard key={index} data={infos} />
        ))
      }
    </section>
  )
}

export default Catagory;
