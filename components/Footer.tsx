import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <p>Luxury Travel Agency</p>
        <p>123 Main Street</p>
        <p>Anytown, USA 12345</p>
        <p>555-555-1212</p>
      </div>
      <div className="footer-links">
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
      </div>
      <div className="footer-copyright">
        <p>Copyright 2021 Luxury Travel Agency</p>
      </div>
    </footer>
  )
}

export default Footer
