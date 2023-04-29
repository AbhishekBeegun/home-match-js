import Link from 'next/link'
import React from 'react'
import {IoCall,IoMail,IoLogoWhatsapp} from "react-icons/io5"

const LandCard = ({land}) => {

  return (
    <Link href={`/LandDetails/${land.slug}`}
     className='cursor pointer h-[300px] w-[300px] flex flex-col justify-evenly items-center  hover:scale-110 transition-all ease-in-out'>
        <img 
        className='h-full w-full rounded-t-xl'
        src={land.coverPhoto[0].url} alt='land'/>
   
   
   
        <div className='p-5 flex justify-evenly rounded-b-xl h-[150px] w-[300px] bg-white shadow'>
       <div className='flex flex-col justify-evenly'>
        <p className='font-medium'>{land.title}</p>
        <p className='uppercase font-medium'>{land.location}</p>

        <div className='text-2xl font-semibold text-[#13ABF3]'>
        <span>Rs</span><span className='px-4'>{land.price}</span>
        </div>
       </div>

       <div className='flex flex-col justify-evenly items-center gap-5'>
        <img 
        className='w-24'
        src={land.agency.agencylogo.url} alt="card" />

        <div className='flex gap-3 text-xl'>
          <IoCall />
          <IoMail />
          <IoLogoWhatsapp/>
        </div>
       </div>

       <div>

       </div>
      </div>
    </Link>
  )
}

export default LandCard