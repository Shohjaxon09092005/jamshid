import React from 'react'
import '../style/banner2.css'
import Ban from './Ban'
import Banner2Card from './Banner2Card'
function Banner2() {
  return (
    <section className='banner2'>
     <Banner2Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero." />
     <div className="banner2__title">
      <ul className='banner2__list'>
        <li><p>How do I apply?</p>
        <h6>+</h6>
        </li>
        <li><p>Can I apply as a U.S. based person/company?</p>
        <h6>+</h6>
        </li>
        <li><p>How will I be compensated?</p>
        <h6>+</h6>
        </li>
        <li><p>What type of project will qualify for a Grant?</p>
        <h6>+</h6>
        </li>
        <li><p>What is the application timeline? When can I expect to hear back?</p>
        <h6>+</h6>
        </li>
        <li><p>How can I increase my chances of getting funded?</p>
        <h6>+</h6>
        </li>
        <li><p>How often do you approve new Rounds of funding?</p>
        <h6>+</h6>
        </li>
      </ul>
     </div>
    </section>
  )
}

export default Banner2
