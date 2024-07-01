import React from 'react'
import '../style/discover.css'
function Discover({nomi, text, title,btn}) {
  return (
    <div className='discover'>
     <div className="discover__card">
     <h4>{nomi}</h4>
      <p>{text}</p>
      <span>Funding amount: {title}</span>
     </div>
     <button className='discover__btn'>{btn}</button>
    </div>
  )
}

export default Discover
