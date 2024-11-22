import React from 'react'
import Header from '../Header/header'

const LayOut = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default LayOut
