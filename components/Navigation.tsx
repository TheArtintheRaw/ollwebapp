import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav>
      <Link href="#">
        Home
      </Link>
      <Link href="#destinations">
        Destinations
      </Link>
      <Link href="#travel-packages">
        Travel Packages
      </Link>
      <Link href="#about">
        About Us
      </Link>
      <Link href="#contact">
        Contact
      </Link>
    </nav>
  )
}

export default Navigation
