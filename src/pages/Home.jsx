import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offer from '../components/OfferLetter/Offer'
import Collections from '../components/Collections/Collections'

function Home() {
  return (
    <div>
        <Hero />
        <Popular/>
        <Offer />
        <Collections />
    </div>
  )
}

export default Home