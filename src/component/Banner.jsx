import React from 'react'
import '../style/banner.css'
import SectionNav from './SectionNav'
import rasm1 from '../img/rasm1.png'
import rasm2 from '../img/rasm2.png'
import rasm3 from '../img/rasm3.png'
import rasm4 from '../img/rasm4.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Reviev from './Reviev';
import Trading from './Trading'
function Banner() {
  return (
    <section className='banner'>
      <SectionNav nomi="Projects built with grants" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero." text=" View all funded projects"/>
      <div className="container">
       
     <div className="banner__swiper0">
     <Swiper loop={true}
        slidesPerView={3.1}
        spaceBetween={24}
        breakpoints={{
          100:{
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
          },
         
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          769: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
          1019:{
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1135: {
            slidesPerView: 3.3,
            spaceBetween: 30,
          },}}
        className="mySwiper"
      >
        <SwiperSlide> <Reviev text="Crowdfund" nomi="Funding rates page" desc="Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access." rasm={rasm1}/></SwiperSlide>
        <SwiperSlide> <Trading desc="Edition" nomi="Tradingview integration" text="The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different ..." rasm={rasm2}/></SwiperSlide>
        <SwiperSlide> <Reviev text="Entry" nomi="Rewards optimization research and paper" desc="The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership." rasm={rasm3}/></SwiperSlide>
        <SwiperSlide> <Reviev text="Crowdfund" nomi="DAO Organizational Structure Research" desc="The grant will be used to fund a deep dive research report around historical and existing DAO structures with guidance around successful best practices. Topics will include organization structure, reporting & accountability, contributors, funding, and more." rasm={rasm4}/></SwiperSlide>
        
      </Swiper>
     </div>
      
      </div>
    </section>
  )
}

export default Banner
