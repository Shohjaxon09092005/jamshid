import React from 'react'
import '../style/bannernav.css'
import rasm1 from '../img/bancard1.png'
import rasm2 from '../img/bancard2.png'
import Ban from './Ban'
import BannerNavCard from './BannerNavCard'
function BannerNav() {
  return (
    <section className='bannernav'>
      <Ban  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero." title="Read more on our blog"/>
      <div className="bannernav__title">
        <BannerNavCard rasm={rasm1} title="Round 9 of approvals"/>
        <BannerNavCard rasm={rasm2} title="Round 8 of approvals"/>
      </div>
    </section>
  )
}

export default BannerNav
