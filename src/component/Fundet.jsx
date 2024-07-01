import React from 'react'
import '../style/fundet.css'
import swit from '../img/Switch.png'
import fon1 from '../img/fon1.png'
import fon2 from '../img/fon2.png'
import fon3 from '../img/fon3.png'
import fon4 from '../img/fon4.png'
import fon5 from '../img/fon5.png'
import fon6 from '../img/fon6.png'
import fon7 from '../img/fon7.png'
import fon8 from '../img/fon8.png'
import fon9 from '../img/fon9.png'
import Reviev from './Reviev'
import Trading from './Trading'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
function Fundet() {
  return (
    <section className='fundet'>
      <div className="container">
      <div className="fundet__text">
        <h1>Funded grants</h1>
        <ul className='fundet__list'>
            <li>All</li>
            <li>Technical / Tool Development</li>
            <li>Governance</li>
            <li>Growth / Marketing</li>
            <li>Analytics</li>
            <li>Third Party Provider</li>
        </ul>
        <div className="ota">
           <Swiper loop={true}
        slidesPerView={3}
        spaceBetween={24}
        // breakpoints={{
        //   600:{
        //     slidesPerView: 3,
        //     spaceBetween: 10,
        //   },
        // }}
         
        className="mySwiper"
      >
        <SwiperSlide>   <li className='bola'>All</li></SwiperSlide>
        <SwiperSlide> <li>Technical / Tool Development</li></SwiperSlide>
        <SwiperSlide> <li>Governance</li></SwiperSlide>
        <SwiperSlide>  <li>Growth / Marketing</li></SwiperSlide>
        <SwiperSlide>  <li>Analytics</li></SwiperSlide>
        <SwiperSlide> 
            <li>Third Party Provider</li> </SwiperSlide>
      
            
            
           
            
        
      </Swiper>
        </div>
       
        <div className="fundet__card">
            <img src={swit} alt="" />
            <h5>Show only completed</h5>
        </div>
      </div>
      <div className="fundet__grid">
        <Reviev text="Category" nomi="Hedgie banner" desc="They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy." rasm={fon1} />
        <Reviev text="Category" nomi="Hedgie educational content" desc="They are mathematically consistent in the sense that no one rule would ever violate another." rasm={fon2} />
        <Trading desc="Category" nomi="Hedgie educational content" text="This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then ..." rasm={fon3}/>
        <Trading desc="Category" nomi="Japanese content website" text="Historically, the electron, for example, was thought to behave like a particle, and then it was found that in many respects it behaved like a ..." rasm={fon4}/>
        <Reviev text="Category" nomi="DGP referral program" desc="They finally obtained a consistent description of the behavior of matter on a small scale." rasm={fon5} />
        <Trading desc="Category" nomi="ETHGlobal event sponsorship" text="Because atomic behavior is so unlike ordinary experience, it is very difficult to get used to, and it appears peculiar and mysterious to everyon ..." rasm={fon6}/>
        <Reviev text="Category" nomi="Rust SDK" desc="At the end of the 19th century, physics appeared to be at an apex. Several people are reported to have said something like this" rasm={fon7} />
        <Reviev text="Category" nomi="Hack for Inclusion Sponsorship" desc="Later, however (in the beginning of the twentieth century), it was found that light did indeed sometimes behave like a particle. " rasm={fon8} />
        <Reviev text="Category" nomi="Gitcoin Grants Round 13 sponsorship" desc="So we have to learn about them in a sort of abstract or imaginative fashion and not by connection with our direct experience." rasm={fon9} />
      </div>
      </div>
    </section>
  )
}

export default Fundet
