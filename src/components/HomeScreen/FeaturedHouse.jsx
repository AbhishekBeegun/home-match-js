import React from 'react'
import Card from '../Card/Card'

const FeaturedHouse = ({houses}) => {

  return (
    <div className='flex flex-col py-10'>

      <p className='text-3xl font-semibold px-8 lg:px-64'>Featured Properties</p>

      <div className='flex flex-col lg:flex-row gap-10 lg:gap-2 justify-evenly items-center flex-wrap py-10'>
        {houses && houses.map( (house) => (
          <div key={house.slug}>
          <Card house={house}/>
          </div>
        )) }

      </div>
    </div>
  )
}

export default FeaturedHouse