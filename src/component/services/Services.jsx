import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What Cann I Offer</h5>
      <h2>My Skills</h2>

      <div className="container container-service">
        <article className="service">
          <div className="service_head">
            <h3> Technologies</h3>
            </div>
            <ul className='service_list'>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Spring Framework</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p>Hibernate</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p>Junit</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Mokito</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Maven</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Git</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Docker</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Kubernetes</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> SQL</p>
              </li>
            </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3> Java Language</h3>
            </div>
            <ul className='service_list'>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Object-Oriented Programming</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p>Java Database Connectivity</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p>Multithreading</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> SOLID Principles </p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Java Servlet API</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Stream API</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Algorithms</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Data Structures</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Functional Interfaces</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Aspect Oriented Programming</p>
              </li>
            </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3> Frontend</h3>
            </div>
            <ul className='service_list'>
              <li> 
                <BiCheck className='service_icon'/>
                <p> Java Script</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p>HTML</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p>Css</p>
              </li>
              <li> 
                <BiCheck className='service_icon'/>
                <p> React </p>
              </li>
            </ul>
        </article>
      </div>

    </section>
  )
}
