import React from 'react'
import portfolio from '../../assets/cve.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={portfolio} download={portfolio} className='btn'>Download CV </a>
        <a href='#contacts' className='btn btn-primary'>Let's Talk </a>
    </div>
  )
}
