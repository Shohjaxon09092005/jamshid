import React from 'react'
import '../style/header.css'
import logot from '../img/helogo.png'
import burger from '../img/burger.png'
function Header() {
  function openModal(){
    document.querySelector(".modal").classList.add("show")
  }
  function closeModal(){
    document.querySelector(".modal").classList.remove("show")
  }
  return (
    <header className='header'>
     <div className="modal">
      <button onClick={closeModal}>Close</button>

     <ul className='modal__list'>
          <li>Discover initiatives</li>
          <li>Funded grants</li>
          <li>Program expenses</li>
          <li>Blog</li>
          <li>FAQ</li>
         
        </ul>
     </div>
      <div className="header__warapper">
       <img className='logo' src={logot} alt="" />
       <nav>
        <ul className='header__list'>
          <li>Discover initiatives</li>
          <li>Funded grants</li>
          <li>Program expenses</li>
          <li>Blog</li>
          <li>FAQ</li>
         
        </ul>
        <button className='header__btn'>Apply for grant</button>
        <button className='he__btn2'>Apply</button>
          <img className='header__bur' onClick={openModal} src={burger} alt="" />
       </nav>
       
       </div>
      
      
    </header>
  )
}

export default Header
