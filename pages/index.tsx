
import React from 'react'
import Head from 'next/head'

import Navigation from '../components/Navigation'
// import DestinationList from '../components/DestinationList'
// import TravelPackageList from '../components/TravelPackageList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Luxury Travel Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Footer />
    </div>
    
  )
}

export default Home
