import React from 'react'
import Image from 'next/image'
import {IoCall,IoMail,IoLogoWhatsapp} from "react-icons/io5"
import Link from 'next/link'

const Card = ({house}) => {

  return (
    <Link
    href={`/HouseDetails/${house.slug}`}
    className='h-[350px] lg:h-[400px] w-[300px] lg:w-[400px] rounded-xl relative flex justify-center hover:scale-110 transition-all ease-in-out'>
      <img 
      className='h-[70%] w-full rounded-xl object-cover'
      src={house.coverPhoto[0].url} alt='Card'/>
      
      
      <div className=' absolute border-b border-black p-5 bottom-0 flex justify-evenly rounded-xl h-[150px] w-[280px] lg:h-[170px] lg:w-[370px] bg-white'>
       <div className='flex flex-col justify-evenly'>
        <div className='text-xl font-semibold text-[#13ABF3]'>
          <span>Rs</span><span className='px-2'>{house.price}</span>
        </div>
        <p className='font-medium'>{house.title}</p>
        <p className='uppercase font-medium text-xs'>{house.location}</p>

       </div>

       <div className='flex flex-col justify-evenly items-center gap-5'>
        <img 
        className='w-28'
        src={house.agency.agencylogo.url} alt="card" />

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

export default Card