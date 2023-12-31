import React from 'react'
import './header.css'
import { CTA } from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h2>Hanna Lembak</h2>
        <h5 className="text-light">Java Software Engineer</h5>
        <CTA/> 
        <HeaderSocial/>
      

      <div className='me'>
        <img src={ME} alt="me" />
      </div>
      <a href='#about' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header 
