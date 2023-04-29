import React from 'react'
import LandCard from '../Card/LandCard'

const NewLand = ({lands}) => {
  return (
    <div className='flex flex-col py-10 '>
        <p className='text-3xl font-semibold px-8 lg:px-64 py-4'>Land For Sale</p>

        <div className='flex flex-col lg:flex-row gap-20 lg:gap-2 justify-evenly items-center flex-wrap py-10'>
        {lands && lands.map( (land) => (
          <div key={land.slug}>

          <LandCard land={land} />
          </div>
        )) }

      </div>
    </div>
  )
}

export default NewLand