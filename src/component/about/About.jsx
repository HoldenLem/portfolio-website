import React from 'react'
import './about.css'
import JAVA from '../../assets/java.png'
import {AiFillStar} from 'react-icons/ai'

export const Abbout = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={JAVA} alt="JAVA" />
          </div>

        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <h5>
                Creative
              </h5>
              <AiFillStar className='about-icon'/>
              </article>
              <article className='about_card'>
              <h5>
                Persistent
              </h5>
              <AiFillStar className='about-icon'/>
              </article>
              <article className='about_card'>
              <h5>
                Sociable
              </h5>
              <AiFillStar className='about-icon'/>
              </article>
          </div>
          <p>
          I am a passionate and results-driven Java Software Developer with a strong foundation in software development and a deep appreciation for clean, efficient, and scalable code. 
         I have honed my skills in designing, implementing, and maintaining Java-based applications that deliver real value to users and businesses alike.
          </p>

          <a href='#contacts' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}
