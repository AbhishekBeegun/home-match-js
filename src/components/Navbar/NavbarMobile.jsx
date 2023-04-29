import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "../../../public/DALL_E_2023-04-27_08.29.58-removebg-preview.png"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
const NavbarMobile = () => {
    const [OpenNav, setOpenNav] = useState(true)
  return (
    <nav className='navbar-mobile shadow z-50 fixed top-0 w-full flex justify-between items-center bg-white px-8 py-2'>
      

     {!OpenNav ?

     <div className='fixed h-full w-[90vw] bg-white z-50 top-0'>
      <div className='flex justify-between px-10'>
      <Image
      className='w-14'
      src={Logo} alt='LOGO' />
      <button onClick={() => setOpenNav(!OpenNav)}>
       <AiOutlineClose size={20}/>
      </button>

      </div>

      

      <div className='flex flex-col gap-10 text-2xl text-right px-16 py-4'>
        <Link href={""}>
        Login
        </Link>

        <Link href={""}>
        Create an Ad
        </Link>



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

     </div> :
     <div className='flex justify-between items-center'>
           <Link href={"/"} className='flex items-center justify-center'>

           <Image 
           className='w-10'
           src={Logo} alt='LOGO' />
           <p className='font-semibold text-xl'>HomeMatch</p>
           </Link>
      
     <button onClick={() => setOpenNav(!OpenNav)}>
      <AiOutlineMenu />
     </button>
     </div>
     }


      
    </nav>
  )
}

export default NavbarMobile