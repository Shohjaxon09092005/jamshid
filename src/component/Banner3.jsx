import React from 'react'
import '../style/banner3.css'
import ban3 from '../img/ban3.png'
import right from '../img/right.png'
import ban4 from '../img/ban4.png'
function Banner3() {
  return (
    <section className='banner3'>
        <div className="container">
           <div className="banner3__content"> <h2>Application <span>process <img src={ban3} alt="" /></span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>

            </div>
       
           
            <div className="banner3__grid">
       
                <div className="banner3__title">
               
                   <h3>1</h3>
                    <h5>Apply</h5>
                    <p>Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background. </p>
                    
                </div>
               <img className='ban3__right' src={right} alt="" />
                <div className="banner3__title">
                 
                   <h3>2</h3>
                    <h5>Interview</h5>
                    <p>If your application is selected, the dYdX Grants will conduct 1-2 interviews to collect more information on the Applicant's background and the proposal. </p>
                    
                </div>
                <img className='ban3__ban4' src={ban4} alt="" />
                <div className="banner3__title">
                   
                   <h3>3</h3>
                    <h5>Grant offer</h5>
                    <p>The dYdX Grants team will determine if the proposal fits into the grant program. A vesting schedule and timeline for product development reports will also be determined in the offer;</p>
                   
                </div>
            </div>
           
        </div> 
       
      
     
    </section>
  )
}

export default Banner3
