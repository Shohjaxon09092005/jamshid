import React from 'react'
import aylana from '../img/aylana.png'
function Banner2Card({text}) {
  return (
    <div className='banner2card'>
      <h2>Frequently asked <span> questions <img src={aylana} alt="" /> </span></h2>
     <p>{text}</p>
    
    </div>
  )
}

export default Banner2Card
