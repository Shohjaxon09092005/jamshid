import React from 'react'
import '../style/discovercom.css'
import sr from '../img/fi_check.svg'
function DiscoverCom({nomi,text,title,btn}) {
  return (
    <div className='discovercom'>
       <div className="discovercom__card">
     <h4>{nomi}</h4>
      <p>{text}</p>
      <span>Funding amount: {title}</span>
     </div>
     <button className='discovercom__btn'>{btn} <img src={sr} alt="" /></button>
    </div>
  )
}

export default DiscoverCom
