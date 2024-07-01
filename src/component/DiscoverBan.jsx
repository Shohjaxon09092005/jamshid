import React from 'react'
import '../style/discoverban.css'
import Discover from './Discover'
import DiscoverOpen from './DiscoverOpen'
import DiscoverCom from './DiscoverCom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Reviev from './Reviev';
function DiscoverBan() {
  return (
    <section className='discoverban'>
      <div className="container">
        <div className="discoverban__card">
            <h1>Discover initiatives (RFPs)</h1>
            <p>The list below includes initial ideas that we think could make excellent Grants. This is a living list that will continue to update as ideas popup.</p>
            <ul className='discoverban__list'>
                <li>All</li>
                <li>Open</li>
                <li>Funded</li>
                <li>Completed</li>
            </ul>
            <div className="discover___swiper">
            <Swiper loop={true}
        slidesPerView={3.1}
        spaceBetween={16}
        className="mySwiper"
      >
        <SwiperSlide> <p>All</p></SwiperSlide>
        <SwiperSlide> <p>Open</p></SwiperSlide>
        <SwiperSlide> <p> Funded</p></SwiperSlide>
        <SwiperSlide> <p>Completed</p> </SwiperSlide>
       
      </Swiper>
            </div>
        </div>


        <div className="discoverban__wrapper">
            <Discover nomi="Funding Rate Page" text="Page that provides a live look at all funding rates with popular timeframes in annualized format" title="$45,000 - $85,000" btn="Funded"/>
            <Discover nomi="CLI Trading Tool" text="Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal" title="$25,000 - $40,000
            " btn="Funded"/>
            <DiscoverOpen nomi="New Language SDKs" text="Replicate existing Python SDK to new programming languages with all the same features" title="$25,000 - $40,000" btn="Open" />
            <DiscoverCom nomi="Liquidation Alert Tool" text="Self-hosted tool that alerts the trader of upcoming liquidation prices across multiple messaging venues" title="$30,000 - $50,000" btn="Completed" />
            <Discover nomi="Governance Dashboard" text="Governance page to promote  discussions, proposals, delegation and voting" title="$15,000 - $30,000" btn="Funded"/>
            <Discover nomi="Delegation Tool" text="Webpage to allow active participants to market their voting and enable direct delegation from DYDX holders" title="$15,000 - $30,000" btn="Funded"/>
            <Discover nomi="Newsletter" text="Weekly or Monthly newsletters promoting and educating the dYdX platform" title="$10,000 - $20,000" btn="Funded"/>
            <Discover nomi="Academy Contributions" text="Webpages, Courses, Glossaries and Youtube libraries educating new users on dYdX" title="$10,000 - $25,000" btn="Funded"/>
            <DiscoverOpen nomi="Discord bots" text="Additional Discord bots that notify members of activity on dYdX and governance" title="$5,000 - $10,000" btn="Open" />
            <Discover nomi="Reward tracking & Simulator" text="Page or tool that allows traders to calculate future rewards and simulate earnings from activity" title="$20,000 - $30,000" btn="Funded"/>
        </div>
      </div>
    </section>
  )
}

export default DiscoverBan
