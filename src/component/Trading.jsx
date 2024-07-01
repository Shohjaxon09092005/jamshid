import React from 'react'
import '../style/traiding.css'
function Trading({desc,nomi, text,rasm }) {
  return (
    <div className='traiding'>
      <div className="traiding__div">

      </div>
      <div className="traiding__card">
        <div className="traiding__text">
        <span>{desc}</span>
        <h4>{nomi}</h4>
        <h5>Funding amount:$5,000 - $6,000</h5>
        <p>{text}</p>
        </div>
      </div>
      <img src={rasm} alt="" />
    </div>
  )
}

export default Trading
