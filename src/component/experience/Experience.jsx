import React from 'react'
import './experience.css'
import {MdCastForEducation} from 'react-icons/md'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Know</h5>
      <h2>Education and Courses</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <div className="experience_content">
          <h3> Diplomas and Certificates</h3>
            <article className='experience_details'>
              <MdCastForEducation/>
              <h4 className='color_class'>Master of Law in Ivan Franko National University of Lviv</h4>
            </article>
            <article className='experience_details'>
              <MdCastForEducation/>
              <h4><a href="https://career.softserveinc.com/uk-ua/certification/verification" target='_blank'>SoftServe IT Academy course "JAVA ONLINE MARATHON" LK 10275/2022</a></h4>
            </article>
            <article className='experience_details'>
              <MdCastForEducation/>
              <h4><a href="https://www.udemy.com/certificate/UC-b0cae167-c3be-4ae0-abbd-a0f209bf121f/" target='_blank'>Spring Boot 3, Spring 6 & Hibernate for Beginners </a></h4>
            </article>
            <article className='experience_details'>
              <MdCastForEducation/>
              <h4><a href="https://www.udemy.com/certificate/UC-48c1bd1a-0f7b-45dd-859a-017cba421d7e" target='_blank'> Docker & Kubernetes: The Practical Guide [2023 Edition]</a></h4>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}
