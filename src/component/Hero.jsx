import React from 'react'
import '../style/hero.css'
import strelka from '../img/strelkah.png'
import rasm2 from '../img/headerim2.png'
import rasm1 from '../img/chiziq.png'
function Hero() {
  return (
    <section className='hero'>
      <div className="container">
        <div className="hero__wrapper">
            <h1>Powering the future of dYdX through community <span>grants <img src={rasm1} alt="" /></span></h1>
           
            <div className="hero__but">
                <button>Discover RFPs</button>
                <button>Apply for grant <img src={strelka} alt="" /></button>
            </div>
            <div className="hero__content">
                <div className="hero__title">
                    <h6>100+ </h6>
                    <p>projects funded</p>
                </div>
                <div className="hero__title">
                    <h6>$3+ milion </h6>
                    <p>awarded</p>
                </div>
                <div className="hero__title">
                    <h6>400+  </h6>
                    <p>projects funded</p>
                </div>
            </div>
            <div className="header__im2">
              <img src={rasm2} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
