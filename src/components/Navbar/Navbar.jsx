import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../../public/DALL_E_2023-04-27_08.29.58-removebg-preview.png"
import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar-pc shadow-lg fixed top-0 right-0 w-full z-50 flex items-center justify-between px-8 py-2 bg-white'>


      <div className='flex gap-10'>
        <Link href={""}>
          Buy        
        </Link>

        <Link href={""}>
          Sell        
        </Link>

        <Link href={""}>
          Holidays        
        </Link>
      </div>


      <Link href={"/"} className='flex items-center'>
      
      <Image
      className='w-10 scale-150 object-cover'
      src={Logo} alt='LOGO' />

      <p className='font-semibold text-xl'>HomeMatch</p>
      </Link>

      <div className='flex gap-10'>
        <Link href={""}>
        Create an Ad
        </Link>

        <Link href={""}>
        Login
        </Link>
      </div>


    </nav>
  )
}

export default Navbar