import React from 'react'
import Link from 'next/link'

type Destination = {
  id: number
  name: string
  image: string
  description: string
}

type DestinationListProps = {
  destinations: Destination[]
}

const DestinationList = ({ destinations }: DestinationListProps) => {
  return (
    <section>
      <h2>Popular Destinations</h2>
      <div className="destination-list">
        {destinations.map(destination => (
          <div className="destination" key={destination.id}>
            <Link href="/destination/[id]" as={`/destination/${destination.id}`}>
              
                <img src={destination.image} alt={destination.name} />
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DestinationList
