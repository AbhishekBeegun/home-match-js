import React from 'react'
import { LAND_DETAILS } from '@/lib/Queries'
import {getApolloClient} from '@/lib/apollo-client'
import {IoMdHeartEmpty,IoMdShare} from "react-icons/io"
import HeadDetails from '@/components/BasicLayout/HeadDetails'
const Land = ({LD}) => {

  return (
    <div className='flex flex-col items-center lg:items-start lg:flex-row justify-center w-screen py-16 '>
    <HeadDetails title={LD.title}/>
    <a 
    href={`tel:${LD.agency.phonenumber}`}
    className='fixed bottom-1 flex justify-center items-center w-[90vw] h-[50px] bg-sky-400 rounded-full text-white'>
      <p className='text-lg'>Contact the Agency</p>
    </a>
    
    <div className='w-full flex items-center justify-center '>
        <img
        className='w-full h-full object-cover   ' 
        src={LD.coverPhoto[0].url} alt="CoverPhoto" />
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
                <p>{LD.price}</p>
                </div>
            <p className='text-lg'>{LD.title}</p>
            <div className='flex items-center'>
            <p className='text-[#13ABF3]'>Location : </p>
            <p className='px-1'>{LD.location}</p>
            </div>
        </div>

        <div className='flex flex-col items-center justify-evenly'>
            <div className='px-4'>
                <p className='py-2 text-[#13ABF3]'>Description : </p>
                <p className='text-sm'>{LD.fulldesc}</p>
            </div>

            <div className='py-8 px-4 lg:px-0 flex flex-col items-start '>
                <img src={LD.agency.agencylogo.url} alt="Lgog" />
                <p>{LD.agency.name}</p>
                <p>{LD.agency.address}</p>
                <p>{LD.agency.phonenumber}</p>
                <p>{LD.agency.emailaddress}</p>
            </div>



        </div>
    </div>

    </div>
  )
}

export default Land


export async function getStaticProps({ params = {} } = {}) {
 
    const {slug} = params;
   
     const apolloClient = getApolloClient();
   
     const data = await apolloClient.query({
       query: LAND_DETAILS
       ,
      variables: {
        slug: slug,
      }
        
     });
   
     const LD = data?.data.land
     return { 
       props: {
       LD
       }
     }
 }

  
   
   export async function getStaticPaths() {
     return {
       paths: [],
       fallback: 'blocking'
     }
   }