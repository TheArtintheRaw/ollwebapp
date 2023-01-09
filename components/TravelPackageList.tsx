import React from 'react'
import Link from 'next/link'

interface TravelPackage {
  id: number
  name: string
  image: string
  description: string
  price: number
}

interface TravelPackageListProps {
  packages: TravelPackage[]
}

export default function TravelPackageList({ packages }: TravelPackageListProps) {
  return (
    <section>
      <h2>Featured Travel Packages</h2>
      <div className="package-list">
        {packages.map(pkg => (
          <div className="package" key={pkg.id}>
            <Link href="/package/[id]" as={`/package/${pkg.id}`}>
              
                <img src={pkg.image} alt={pkg.name} />
                <h3>{pkg.name}</h3>
                <p>{pkg.description}</p>
                <p className="price">${pkg.price.toFixed(2)}</p>
              
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

