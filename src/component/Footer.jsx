import React from 'react'
import '../style/footer.css'
import arrow from '../img/arrov.png'
import logo from '../img/footerlogo (2).png'
import logo1 from '../img/Twitter - Negative.png'
import logo2 from '../img/Discord - Negative.png'
import rasm from '../img/fi_external-link.png'
function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__card">
                    <h5>Have a project in mind?</h5>
                    <h2>Let’s create something awesome.</h2>
                    <button>Apply for grant <img src={arrow} alt="" /></button>
                </div>
                <div className="footer__text">
                    <ul className='footer__list'>
                        <li><img className='footer__lo' src={logo} alt="" /></li>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Brand assets </li>
                        <li>dYdX Foundation <img src={rasm} alt="" /></li>
                        <li>dYdX trading <img src={rasm} alt="" /></li>
                    </ul>
                    <div className="footer__logo">
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
