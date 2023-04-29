import React from 'react'

const HomeBanner = () => {
  return (
    <div className='h-[70vh] w-[100vw] bg-black  flex items-center justify-center'>
      {/* <div className='absolute z-30'>
      <SearchCard />
      </div> */}
      <img 
      className='w-full h-full opacity-50 object-cover'
      src='https://barefootsurftravel.com/wp-content/uploads/2020/01/handy19-0266-2.jpg' alt="HomeBanner"/>

      <h1 className='absolute text-white px-4 text-center text-[2.5rem] lg:text-[4rem]'>Discover a place
       you&apos;ll love to live</h1>
    </div>
  )
}

export default HomeBanner