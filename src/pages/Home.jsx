import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offer from '../components/OfferLetter/Offer'
import Collections from '../components/Collections/Collections'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
        <Hero />
        <Popular/>
        <Offer />
        <Collections />
        <Newsletter />
    </div>
  )
}

export default Home