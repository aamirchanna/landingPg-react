import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import landingPageData from './landingPage'
import Header from './components/header'
import Hero from './components/hero'
import Testimonial from './components/testimonial'
import Features from './components/feature'
import Footer from './components/footer'

function App() {
  const { header, hero, testimonials, features } = landingPageData
  console.log("landing page", landingPageData)
  return (
    <>
      <div>
        {/* header  */}
        <Header header={header} />


        {/* hero  */}
        <Hero hero={hero} />

        {/* features  */}
        <Features features={features}   />



        {/* Testimona;  */}
       <Testimonial  testimonials={testimonials}  />



        {/* Footer  */}
        <Footer header={header} />
      


      </div>
    </>
  )
}

export default App
