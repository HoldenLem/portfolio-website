import React from 'react'
import { Header } from './component/header/Header.jsx'
import { Nav } from './component/nav/Nav.jsx'
import { Abbout } from './component/about/About.jsx'
import { Contacts } from './component/Contacts/Contacts.jsx'
import { Testimonials } from './component/testimonials/Testimonials.jsx'
import { Services } from './component/services/Services.jsx'
import { Portfolio } from './component/portfolio/Portfolio.jsx'
import { Footer } from './component/footer/Footer.jsx'
import { Experience } from './component/experience/Experience.jsx'

export const App = () => {
  return (
    <>
     <Header />
     <Nav />
     <Abbout />
     <Contacts />
     <Testimonials />
     <Services />
     <Portfolio />
     <Experience />
    </>
  )
}

export default App


