import React from 'react'
import Hero from '../components/Hero'
import Companies from '../components/Companies'
import Testimonials from '../components/Testimonial'
import Newletter from '../components/NewLetter'
import { useAppContext } from '../context/AppContext'

const Home = () => {

   const {token} = useAppContext();
   console.log(token)
  return (
    <div>
      
      {/* ALWAYS VISIBLE */}
      <Hero />

      {/* ONLY VISIBLE AFTER LOGIN */}
      {( token &&
        <>
          <Companies />
          <Testimonials />
          <Newletter />
        </>
      )}

    </div>
  )
}

export default Home

