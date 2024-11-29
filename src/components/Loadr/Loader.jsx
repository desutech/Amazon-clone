import React from 'react'
import { GridLoader } from 'react-spinners'

function Loader() {
  return (
    <div style={{
      display: 'flex',
      alignItem: "center",
      justifyContent: "center",
      height: "50vh",
      paddingTop: "80px",
    }}>
      <GridLoader color='#036444' />
    </div >
  )
}

export default Loader
