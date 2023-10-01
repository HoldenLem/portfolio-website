import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

export const Nav = () => {
  const [activeNav, setActivnav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActivnav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActivnav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActivnav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><BiBookBookmark/></a>
      <a href='#services' onClick={() => setActivnav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contacts' onClick={() => setActivnav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}
