import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Hanna Lembak</a>
      <ul className='permlinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Education</a></li>
        <li><a href='#services'>Skills</a></li>
        <li><a href='#contacts'>Contsct</a></li>
      </ul>

      <div className="footer_socials">
      <a href='https://www.linkedin.com/in/hanna-lembak-487b23211' target='_blank'><BsLinkedin/> </a>
      <a href='https://github.com/HoldenLem' target='_blank'><BsGithub/></a>
      </div>
    </footer>
  )
}
