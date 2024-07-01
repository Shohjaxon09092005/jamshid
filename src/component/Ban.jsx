import React from 'react'
import rasm from '../img/secnav.png'
import rasm4 from '../img/rasmsec.png'
function Ban({ text,title}) {
  return (
    <div className='ban'>
      <div className="ban__wrapper">
<h2>What’s  <h4>new? <img src={rasm4} alt="" /></h4> </h2>
<p>{text}</p>
<span>{title} <img src={rasm} alt="" /></span>
      </div>
    </div>
  )
}

export default Ban
