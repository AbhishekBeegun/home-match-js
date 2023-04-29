import React from 'react'
import AgencyCard from "../Card/AgencyCard"
const FeaturedAgency = ({agencies}) => {
  
  return (
    <div>
      <p className='text-3xl font-semibold px-8 lg:px-64'>Top Agencies in Mauritius</p>

      <div className='flex justify-evenly items-center flex-wrap py-10' >
        {agencies && agencies.length > 0  && agencies.map( (agency) => (
          <div key={agency.slug}>
          <AgencyCard agency={agency} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedAgency