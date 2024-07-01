import React from 'react'
import '../style/reviev.css'
function Reviev({text,nomi,desc,rasm}) {
  return (
    <div className='reviev'>
     <div className="reviev__text">
     <span>{text}</span>
      <h4>{nomi}</h4>
      <h6>Funding amount:$5,000 - $6,000</h6>
      <p>{desc}</p>
     </div>
      <img src={rasm} alt="" />
    </div>
  )
}

export default Reviev
