import React from 'react'

import {getApolloClient} from '@/lib/apollo-client'
import {IoMdHeartEmpty,IoMdShare,IoMdBed} from "react-icons/io"
import {MdLandscape} from "react-icons/md"
import { HOUSE_DETAILS } from '@/lib/Queries'
import HeadDetails from '@/components/BasicLayout/HeadDetails'

const House = ({HD}) => {

  return (
    <div className='flex flex-col items-center lg:items-start lg:flex-row justify-center w-screen py-16 '>
    
    <HeadDetails title={HD.title}/>

    <a 
    href={`tel:${HD.agency.phonenumber}`}
    className='fixed bottom-1 flex justify-center items-center w-[90vw] h-[50px] bg-sky-400 rounded-full text-white'>
      <p className='text-lg'>Contact the Agency</p>
    </a>
    
    <div className='w-full flex items-center justify-center '>
        <img
        className='w-full h-full object-cover   ' 
        src={HD.coverPhoto[0].url} alt="CoverPhto" />
    </div>

    <div className='w-full'>
        <div className='flex justify-evenly gap-5 items-center py-2 border-y shadow-xl'>

             <button>
                <IoMdHeartEmpty size={30}/>
            </button>
            <button>
                <IoMdShare size={30} />
            </button>
        </div>

        <div className='flex flex-col gap-5 px-4 py-6'>
            <div className='text-2xl font-semibold flex'>
                <p className='text-[#13ABF3]'>Price : </p>
                <p className='px-1'>Rs</p>
                <p>{HD.price}</p>
                </div>
            
            <p className='text-lg'>{HD.title}</p>

            <div className='flex items-center text-center justify-evenly font-semibold '>
              <div>
                <IoMdBed size={25} />
                {HD.room}
              </div>

              <div>
                <MdLandscape size={25} />
                {HD.propertysize}<span className='px-1'>m²</span>
              </div>

              <div>
               <p>Near Sea</p>
               {HD.nearsea ? <p>Yes</p> : <p>No</p>}
              </div>

              <div>
               <p>Pool</p>
               {!HD.Pool ? <p>Yes</p> : <p>No</p>}
              </div>
            </div>



            <div className='flex items-center'>
            <p className='text-[#13ABF3]'>Location : </p>
            <p className='px-1'>{HD.location}</p>
            </div>
        </div>

        <div className='flex flex-col items-center justify-evenly'>
            <div className='px-4'>
                <p className='py-2 text-[#13ABF3]'>Description : </p>
                <p className='text-sm'>{HD.fulldesc}</p>
            </div>

            <div className='py-8 px-4 lg:px-0 flex flex-col items-start '>
                <img src={HD.agency.agencylogo.url} alt="Img" />
                <p>{HD.agency.name}</p>
                <p>{HD.agency.address}</p>
                <p>{HD.agency.phonenumber}</p>
                <p>{HD.agency.emailaddress}</p>
            </div>



        </div>
    </div>

    </div>
  )
}

export default House

export async function getStaticProps({ params = {} } = {}) {
 
  const {slug} = params;
 
   const apolloClient = getApolloClient();
 
   const data = await apolloClient.query({
     query: HOUSE_DETAILS
     ,
    variables: {
      slug: slug,
    }
      
   });
 
   const HD = data?.data.house
   return { 
     props: {
     HD
     }
   }
}


 
 export async function getStaticPaths() {
   return {
     paths: [],
     fallback: 'blocking'
   }
 }