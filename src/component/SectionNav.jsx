import React from 'react'
import '../style/sectionnav.css'
import rasm from '../img/secnav.png'

function SectionNav({nomi,title,text}) {
  return (
    <div className='secnav'>
      <div className="secnav__wrapper">
<h2>{nomi}</h2>
<p>{title}</p>
<span>{text} <img src={rasm} alt="" /></span>
      </div>
    </div>
  )
}

export default SectionNav
