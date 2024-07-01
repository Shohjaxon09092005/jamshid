import React from 'react'
import '../style/discoveropen.css'
function DiscoverOpen({nomi,text,title,btn}) {
  return (
    <div className='diccoveropen'>
        <div className="diccoveropen__card">
     <h4>{nomi}</h4>
      <p>{text}</p>
      <span>Funding amount: {title}</span>
     </div>
     <button className='diccoveropen__btn'>{btn}</button>
    </div>
  )
}

export default DiscoverOpen
