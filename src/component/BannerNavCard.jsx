import React from 'react'

function BannerNavCard({rasm,title}) {
  return (
    <div className='bannernavcard'>
      <img src={rasm} alt="" />
      <p>Funding round</p>
      <h4>{title}</h4>
      <p>January 1, 2022</p>
    </div>
  )
}

export default BannerNavCard
