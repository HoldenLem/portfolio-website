import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/hanna-lembak-487b23211' target='_blank'><BsLinkedin/> </a>
        <a href='https://github.com/HoldenLem' target='_blank'><BsGithub/></a>
        <a href='https://www.youtube.com/channel/UC36xIb2yw-YBnGjiEyAZfgQ' target='_blank'><BsYoutube/></a>

    </div>
  )
}

export default HeaderSocial
